import LogoNavbar from '../atoms/LogoNavbar'
import Title from '../atoms/Title'
import LogoutButton from './LogoutButton'

export default function Navbar() {
  return (
    <div className="fixed flex justify-between self-center top-0 h-12 w-screen bg-gradient-to-br from-gray-800 to-gray-900 ">
      <div className="relative h-10 w-10 top-1 left-1">
        <LogoNavbar />
      </div>
      <div className="flex self-center">
        <Title>Brawl Suns</Title>
      </div>
      <div className="relative h-10 w-10 top-1 right-1">
        <LogoutButton />
      </div>
    </div>
  )
}
