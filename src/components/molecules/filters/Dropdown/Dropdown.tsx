import { HTMLAttributes } from 'react'
import styles from './Dropdown.module.css'

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
    open: boolean
}

const Dropdown = ({ open, ...rest }: DropdownProps) => (
    <div
        className={`${open ? styles.open : styles.closed}`}
        {...rest}
        role="menu"
    ></div>
)

export default Dropdown
