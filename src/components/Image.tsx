import NextImage from 'next/image'

interface ImageProps {
  src: string
  alt: string
  width: number
  height: number
}

export default function Image(props: ImageProps) {
  return (
    <NextImage width={props.width} height={props.height} src={props.src} alt={props.alt} />
  )
}
