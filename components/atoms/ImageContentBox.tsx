import Image from 'next/image'

interface ImageContentBoxProps {
  image: string
  name: string
}

export default function ImageContentBox({ image, name }: ImageContentBoxProps) {
  return (
    <Image
      height={0}
      width={0}
      alt={name}
      src={image}
      className="w-full h-full object-cover"
      sizes="25vw"
    />
  )
}
