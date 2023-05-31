import Image from 'next/image'

interface MapProps {
  image: string
  name: string
  mode: string
}

export default function Map({ image, name, mode }: MapProps) {
  console.log(mode)
  return (
    <div className="relative w-full">
      <span className="absolute top-5 left-5 bg-slate-600 text-white p-1 rounded-md">
        {name}
      </span>
      <Image
        src={image}
        alt={name}
        width="0"
        height="0"
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        className="w-full h-auto"
      />
    </div>
  )
}
