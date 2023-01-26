import Image from 'next/image'
import soloShowDownImg from '../../public/solo-showdown.png'

export default function LogoNavbar() {
  return (
    <Image
      src={soloShowDownImg}
      alt="Solo ShowDown image"
      fill
      object-fit="contain"
    />
  )
}
