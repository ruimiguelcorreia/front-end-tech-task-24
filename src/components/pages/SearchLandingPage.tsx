import { ChangeEvent, useState } from 'react'
import useFetchData from '@/hooks/useFetchData'
import GlobalLayout from '@/components/layouts/global'
import PropertiesDashboard from '@/components/layouts/dashboards/PropertiesDashboard'
import SearchFilters from '@/components/organisms/filters/SearchFilters'
import Sidebar from '@/components/molecules/global/Sidebar'
import Form from '@/components/molecules/forms/Form/Form'
import type { AppliedFilters, PropertyType } from '@/types'

const SearchLandingPage = () => {
    const [filters, setFilters] = useState<AppliedFilters>()
    const { data, error, loading } = useFetchData(filters)

    const setFiltersHandler = ({ target }: ChangeEvent<HTMLFormElement>) => {
        const form = target.closest('form')
        if (!form) return

        const data = new FormData(form)
        const bedrooms = data.getAll('bedrooms').map(Number).filter(Boolean)
        const propertyType = data.getAll('propertyType') as PropertyType[]

        setFilters({ bedrooms, propertyType })
    }

    // Designed loading dashboard.
    if (loading) return <>Loading...</>

    // Designed error dashboard.
    if (error) return <>Error...</>

    return (
        <GlobalLayout>
            <Sidebar>
                <Form onChange={setFiltersHandler}>
                    <SearchFilters filters={filters} />
                </Form>
            </Sidebar>
            <PropertiesDashboard properties={data} />
        </GlobalLayout>
    )
}

export default SearchLandingPage
