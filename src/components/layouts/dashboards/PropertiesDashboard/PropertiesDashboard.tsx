import PropertyCard from '@/components/molecules/cards/PropertyCard'
import type { Properties } from '@/types'
import styles from './PropertiesDashboard.module.css'

type PropertiesDashboardProps = {
    properties: Properties
}

const PropertiesDashboard = ({ properties }: PropertiesDashboardProps) => {
    if (!properties.length) return <>No properties available.</>

    return (
        <section className={styles.dashboard} aria-label="Properties List">
            {properties.map((property, index) => (
                <PropertyCard key={index} {...property} />
            ))}
        </section>
    )
}

export default PropertiesDashboard
