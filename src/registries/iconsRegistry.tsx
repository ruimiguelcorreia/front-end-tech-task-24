import { ReactComponent as arrow } from '@/assets/arrow.svg'
import { ReactComponent as bathroom } from '@/assets/bathroom.svg'
import { ReactComponent as bedrooms } from '@/assets/bedrooms.svg'
import { ReactComponent as bills } from '@/assets/bills.svg'
import { ReactComponent as dates } from '@/assets/dates.svg'
import { ReactComponent as flat } from '@/assets/flat.svg'
import { ReactComponent as house } from '@/assets/house.svg'
import { ReactComponent as logo } from '@/assets/logo.svg'
import { ReactComponent as price } from '@/assets/price.svg'
import { ReactComponent as propertyType } from '@/assets/propertyType.svg'
import { ReactComponent as roomType } from '@/assets/roomType.svg'
import { ReactComponent as stayLength } from '@/assets/stayLength.svg'
import { ReactComponent as studio } from '@/assets/studio.svg'
import { ReactComponent as university } from '@/assets/university.svg'

export const iconsRegistry = {
    arrow,
    bathroom,
    bedrooms,
    bills,
    dates,
    flat,
    house,
    logo,
    price,
    propertyType,
    roomType,
    stayLength,
    studio,
    university,
}

export type IconAlias = keyof typeof iconsRegistry
