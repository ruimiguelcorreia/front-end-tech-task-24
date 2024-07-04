import { ImgHTMLAttributes } from 'react'

const LazyImage = (props: ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} loading="lazy" />
)

export default LazyImage
