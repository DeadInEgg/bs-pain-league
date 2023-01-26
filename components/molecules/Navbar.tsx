import LogoNavbar from '../atoms/LogoNavbar'
import Title from '../atoms/Title'

export default function Navbar() {
  return (
    <div className="fixed flex justify-between self-center top-0 h-12 w-screen bg-gray-900 shadow-md">
      <div className="relative h-10 w-10 top-1 left-1">
        <LogoNavbar />
      </div>
      <div className="flex self-center">
        <Title>Pain League</Title>
      </div>
      <div></div>
    </div>
  )
}
