import Icon from '@/components/molecules/global/Icon'
import Link from '@/components/atoms/global/Link'
import styles from './Header.module.css'

const Header = () => (
    <header className={styles.header}>
        <h1 className={styles.container}>
            <Link href="/" aria-label="Direct link to the homepage.">
                <Icon icon="logo" />
            </Link>
        </h1>
    </header>
)

export default Header
