import LazyImage from '@/components/atoms/global/LazyImage'
import { generateTitle } from '@/utils/generateTitle'
import type { Property } from '@/types'
import styles from './PropertyCard.module.css'

const PropertyCard = ({ bedrooms, image, type }: Property) => (
    <article className={styles.card}>
        <LazyImage className={styles.image} src={image} />
        <h3 className={styles.label}>{generateTitle({ bedrooms, type })}</h3>
    </article>
)

export default PropertyCard
