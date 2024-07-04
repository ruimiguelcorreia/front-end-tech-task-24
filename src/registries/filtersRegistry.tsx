import FilterCheckboxSet from '@/components/molecules/filters/FilterCheckboxSet'
import Select from '@/components/atoms/forms/Select'
import type { Filters } from '@/types'
import { IconAlias } from './iconsRegistry'

type FilterOption = {
    label: string
    icon?: IconAlias
    value: string
}

export type FilterSettings = {
    component: ({
        name,
        options,
    }: Pick<FilterSettings, 'name' | 'options'>) => JSX.Element
    icon: IconAlias
    name: string
    options: FilterOption[]
}

export const filtersRegistry: Record<Filters, FilterSettings> = {
    bedrooms: {
        component: Select,
        icon: 'bedrooms',
        name: 'Bedrooms',
        options: [
            {
                label: '1 bedroom',
                value: '1',
            },
            {
                label: '2 bedrooms',
                value: '2',
            },
            {
                label: '3 bedrooms',
                value: '3',
            },
            {
                label: '4 bedrooms',
                value: '4',
            },
            {
                label: '5 bedrooms',
                value: '5',
            },
        ],
    },
    propertyType: {
        component: FilterCheckboxSet,
        icon: 'propertyType',
        name: 'Property Type',
        options: [
            {
                icon: 'flat',
                label: 'Flat',
                value: 'flat',
            },
            {
                icon: 'house',
                label: 'House',
                value: 'house',
            },
            {
                icon: 'studio',
                label: 'Studio',
                value: 'studio',
            },
        ],
    },
}
