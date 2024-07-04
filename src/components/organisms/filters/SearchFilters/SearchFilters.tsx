import { useState } from 'react'
import Divider from '@/components/atoms/global/Divider'
import FilterBlock from '@/components/organisms/filters/FilterBlock'
import type { AppliedFilters, Filters } from '@/types'
import styles from './SearchFilters.module.css'

type SearchFiltersProps = {
    filters: AppliedFilters | undefined
}

const SearchFilters = ({ filters }: SearchFiltersProps) => {
    const [open, setIsOpen] = useState<Filters>()

    const setIsOpenHandler = (filter: Filters) => {
        setIsOpen((prev) => (prev === filter ? undefined : filter))
    }

    return (
        <div className={styles.container}>
            <Divider />
            <FilterBlock
                active={!!filters?.propertyType.length}
                count={filters?.propertyType.length || 0}
                open={open === 'propertyType'}
                toggle={setIsOpenHandler}
                type="propertyType"
            />
            <Divider />
            <FilterBlock
                active={!!filters?.bedrooms.length}
                count={0}
                open={open === 'bedrooms'}
                toggle={setIsOpenHandler}
                type="bedrooms"
            />
            <Divider />
        </div>
    )
}

export default SearchFilters
