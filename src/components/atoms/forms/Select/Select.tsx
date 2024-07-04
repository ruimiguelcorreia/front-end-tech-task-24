import { SelectHTMLAttributes } from 'react'
import Icon from '@/components/molecules/global/Icon'
import { FilterSettings } from '@/registries/filtersRegistry'
import styles from './Select.module.css'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> &
    Pick<FilterSettings, 'name' | 'options'>

const Select = ({ name, options }: SelectProps) => (
    <div className={styles.container}>
        <select className={styles.select} name={name}>
            <option label="Any" value="" defaultChecked />

            {options.map(({ label, value }) => (
                <option key={value} label={label} value={value} />
            ))}
        </select>
        <Icon className={styles.icon} icon="arrow" />
    </div>
)

export default Select
