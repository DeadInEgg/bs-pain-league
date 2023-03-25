import Image from 'next/image'
import starImg from '../../public/star.webp'

export default function LogoNavbar() {
  return <Image src={starImg} alt="Navbar image" fill object-fit="contain" />
}
