import { ButtonHTMLAttributes } from 'react'
import Button from '@/components/molecules/global/Button'
import Icon from '@/components/molecules/global/Icon'
import Counter from '@/components/atoms/global/Counter'
import type { IconAlias } from '@/registries/iconsRegistry'
import styles from './FilterControlButton.module.css'

interface FilterControlButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    active: boolean
    count: number
    icon: IconAlias
    label: string
    open: boolean
}

const FilterControlButton = ({
    active,
    count,
    icon,
    label,
    open,
    ...rest
}: FilterControlButtonProps) => (
    <Button
        className={`${styles.button} ${open ? styles.open : ''} ${
            active ? styles.active : ''
        }`}
        {...rest}
    >
        <span className={styles.container}>
            <Icon icon={icon} />
            {count > 0 && <Counter count={count} />}
        </span>
        <span className={styles.label}>{label}</span>
    </Button>
)

export default FilterControlButton
