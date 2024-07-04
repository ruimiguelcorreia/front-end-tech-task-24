export type PropertyType = 'flat' | 'house' | 'studio'

export type Property = {
    bedrooms: number
    type: PropertyType
    image: string
}

export type Properties = Array<Property>

export type Filters = 'bedrooms' | 'propertyType'

export type AppliedFilters = Record<Filters, (PropertyType | number)[]>
