import LazyImage from '@/components/atoms/global/LazyImage'
import { generateTitle } from '@/utils/generateTitle'
import type { Property } from '@/types'
import styles from './PropertyCard.module.css'

const PropertyCard = ({ bedrooms, image, type }: Property) => {
    const label = generateTitle({ bedrooms, type })

    return (
        <article className={styles.card} aria-label={label}>
            <LazyImage className={styles.image} src={image} />
            <h3 className={styles.label}>{label}</h3>
        </article>
    )
}

export default PropertyCard
