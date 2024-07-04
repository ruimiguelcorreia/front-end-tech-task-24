import { fireEvent, render, screen, within } from '@testing-library/react'
import SearchLandingPage from './SearchLandingPage'
import useFetchData from '@/hooks/useFetchData'
import { generateTitle } from '@/utils/generateTitle'
import { Properties } from '@/types'
import dropdownStyles from '@/components/molecules/filters/Dropdown/Dropdown.module.css'
import { act } from 'react'

// The tests below provide a small portion of test coverage from a journey point of view, in order to demonstrate awareness of the tool. It doesn't represent, by any means, the full coverage it can be done in this particular page, where filters can be combined in multiple ways.

jest.mock('@/hooks/useFetchData')

const allProperties: Properties = [
    { bedrooms: 1, type: 'flat', image: '' },
    { bedrooms: 2, type: 'house', image: '' },
    { bedrooms: 5, type: 'flat', image: '' },
    { bedrooms: 1, type: 'studio', image: '' },
]

const filteredPropertiesByFlat: Properties = [
    { bedrooms: 1, type: 'flat', image: '' },
    { bedrooms: 5, type: 'flat', image: '' },
]

const filteredPropertiesByBedroom: Properties = [
    { bedrooms: 1, type: 'flat', image: '' },
    { bedrooms: 1, type: 'studio', image: '' },
]

describe('Loading - SearchLandingPage', () => {
    test('it displays a loading message initially', () => {
        ;(useFetchData as jest.Mock).mockReturnValue({
            data: [],
            loading: true,
            error: null,
        })

        render(<SearchLandingPage />)

        expect(screen.getByText('Loading...')).toBeInTheDocument()
    })
})

describe('Error - SearchLandingPage', () => {
    test('it displays an error message when an error is returned', () => {
        ;(useFetchData as jest.Mock).mockReturnValue({
            data: [],
            loading: false,
            error: 'Failed to fetch data.',
        })

        render(<SearchLandingPage />)

        expect(screen.getByText('Error...')).toBeInTheDocument()
    })
})

describe('Success - SearchLandingPage', () => {
    beforeEach(() => {
        ;(useFetchData as jest.Mock).mockImplementation((filters) => {
            if (!filters) {
                return {
                    data: allProperties,
                    loading: false,
                    error: null,
                }
            }

            if (filters.propertyType.includes('flat')) {
                return {
                    data: filteredPropertiesByFlat,
                    loading: false,
                    error: null,
                }
            }

            if (filters.bedrooms.includes(1)) {
                return {
                    data: filteredPropertiesByBedroom,
                    loading: false,
                    error: null,
                }
            }

            return {
                data: [],
                loading: false,
                error: null,
            }
        })

        render(<SearchLandingPage />)
    })

    test('it displays the page header', () => {
        const header = screen.getByRole('banner')
        expect(header).toBeInTheDocument()

        const heading = within(header).getByRole('heading')
        expect(heading).toBeInTheDocument()

        const link = within(heading).getByRole('link', {
            name: 'Direct link to the homepage.',
        })
        expect(link).toBeInTheDocument()
    })

    test('it displays the topbar', () => {
        const topbar = screen.getByRole('complementary')
        expect(topbar).toBeInTheDocument()

        const propertyTypeFilterButton = within(topbar).getByRole('button', {
            name: 'Property Type',
        })
        expect(propertyTypeFilterButton).toBeInTheDocument()

        const bedroomsFilterButton = within(topbar).getByRole('button', {
            name: 'Bedrooms',
        })
        expect(bedroomsFilterButton).toBeInTheDocument()
    })

    test('it displays the dashboard with properties', () => {
        const dashboard = screen.getByRole('region', {
            name: 'Properties List',
        })
        expect(dashboard).toBeInTheDocument()

        const cards = within(dashboard).getAllByRole('article')
        expect(cards).toHaveLength(4)

        cards.forEach((card, index) => {
            const image = within(card).getByRole('img')
            expect(image).toBeInTheDocument()

            const heading = within(card).getByRole('heading', {
                name: generateTitle({
                    bedrooms: allProperties[index].bedrooms,
                    type: allProperties[index].type,
                }),
            })
            expect(heading).toBeInTheDocument()
        })
    })

    test('it opens the dropdown to display filter options', () => {
        const topbar = screen.getByRole('complementary')
        const button = within(topbar).getByRole('button', {
            name: 'Property Type',
        })

        const dropdown = button.nextElementSibling as HTMLElement

        expect(dropdown).toBeInTheDocument()
        expect(dropdown).toHaveClass(dropdownStyles.closed)

        act(() => {
            button.click()
        })

        expect(dropdown).toHaveClass(dropdownStyles.open)
    })

    test('it filters the properties by property type', () => {
        const topbar = screen.getByRole('complementary')
        const button = within(topbar).getByRole('button', {
            name: 'Property Type',
        })

        const dropdown = button.nextElementSibling as HTMLElement
        const checkbox = within(dropdown).getByRole('checkbox', {
            name: 'Flat',
        })

        const label = checkbox.nextElementSibling as HTMLElement

        expect(checkbox).not.toBeChecked()

        act(() => {
            label.click()
        })

        expect(checkbox).toBeChecked()

        const counter = within(button).getByLabelText(
            'Number of filters applied: 1'
        )

        expect(counter).toBeInTheDocument()

        const cards = screen.getAllByRole('article')

        cards.forEach((card) => {
            const heading = within(card).getByRole('heading', {
                name: /flat/i,
            })

            expect(heading).toBeInTheDocument()
        })
    })

    test('it filters the properties by number of bedrooms', () => {
        const topbar = screen.getByRole('complementary')
        const button = within(topbar).getByRole('button', {
            name: 'Bedrooms',
        })

        const dropdown = button.nextElementSibling as HTMLElement
        const select = within(dropdown).getByRole('combobox')

        expect(select).toHaveValue('')

        act(() => {
            fireEvent.change(select, { target: { value: '1' } })
        })

        expect(select).toHaveValue('1')

        const cards = screen.getAllByRole('article')

        cards.forEach((card) => {
            const heading = within(card).getByRole('heading', {
                name: /1|studio/i,
            })

            expect(heading).toBeInTheDocument()
        })
    })
})
