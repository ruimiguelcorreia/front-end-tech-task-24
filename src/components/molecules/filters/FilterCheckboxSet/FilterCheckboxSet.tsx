import { Fragment } from 'react/jsx-runtime'
import Icon from '@/components/molecules/global/Icon'
import { FilterSettings } from '@/registries/filtersRegistry'
import styles from './FilterCheckboxSet.module.css'

const FilterCheckboxSet = ({
    name,
    options,
}: Pick<FilterSettings, 'name' | 'options'>) => (
    <fieldset className={styles.container}>
        {options.map(({ label, icon, value }) => (
            <Fragment key={label}>
                <input
                    className={styles.checkbox}
                    id={label}
                    name={name}
                    type="checkbox"
                    value={value}
                />
                <label
                    className={styles.option}
                    htmlFor={label}
                    aria-label={label}
                >
                    {icon && <Icon icon={icon} />}
                    <span className={styles.label}>{label}</span>
                </label>
            </Fragment>
        ))}
    </fieldset>
)

export default FilterCheckboxSet
