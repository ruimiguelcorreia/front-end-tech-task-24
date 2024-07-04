import { SVGProps } from 'react'
import {
    iconsRegistry as registry,
    IconAlias,
} from '@/registries/iconsRegistry'

interface IconProps extends SVGProps<SVGSVGElement> {
    icon: IconAlias
}

const Icon = ({ icon, ...rest }: IconProps) => {
    const Svg = registry[icon]
    return <Svg {...rest} />
}

export default Icon
