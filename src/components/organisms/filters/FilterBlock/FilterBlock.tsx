import { PropsWithChildren } from 'react'
import Dropdown from '@/components/molecules/filters/Dropdown'
import FilterControlButton from '@/components/molecules/filters/FilterControlButton'
import { filtersRegistry as registry } from '@/registries/filtersRegistry'
import type { Filters } from '@/types'
import styles from './FilterBlock.module.css'

type FilterProps = {
    active: boolean
    count: number
    open: boolean
    toggle: (filter: FilterProps['type']) => void
    type: Filters
}

const FilterBlock = ({
    active,
    count,
    open,
    toggle,
    type,
}: PropsWithChildren<FilterProps>) => {
    if (!registry[type]) return <></>

    const { component: Component, icon, name, options } = registry[type]

    if (typeof Component !== 'function') return <></>

    return (
        <div className={styles.container}>
            <FilterControlButton
                active={active}
                count={count}
                icon={icon}
                label={name}
                open={open}
                onClick={() => toggle(type)}
            />
            <Dropdown open={open}>
                <Component name={type} options={options} />
            </Dropdown>
        </div>
    )
}

export default FilterBlock
