import { PropsWithChildren } from 'react'
import Header from '@/components/molecules/global/Header'
import styles from './GlobalLayout.module.css'

const GlobalLayout = ({ children }: PropsWithChildren) => (
    <main className={styles.main}>
        <Header />
        {children}
    </main>
)

export default GlobalLayout
