import type { Property } from '../types'

export const generateTitle = ({
    bedrooms,
    type,
}: Pick<Property, 'bedrooms' | 'type'>): string => {
    if (type === 'studio') {
        return 'Studio'
    }

    return `${bedrooms} bed ${type}`
}
