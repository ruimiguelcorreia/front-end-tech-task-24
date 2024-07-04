import { PropsWithChildren } from 'react'
import styles from './Sidebar.module.css'

const Sidebar = ({ children }: PropsWithChildren) => (
    <aside className={styles.sidebar}>
        <div className={styles.container}>{children}</div>
    </aside>
)

export default Sidebar
