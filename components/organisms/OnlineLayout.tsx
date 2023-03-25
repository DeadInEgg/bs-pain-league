import { ReactNode } from 'react'
import Navbar from '../molecules/Navbar'

interface OnlineLayout {
  children: ReactNode
}

export default function OnlineLayout({ children }: OnlineLayout) {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen bg-gradient-to-b from-gray-700 to-gray-900 p-5">
        {children}
      </div>
    </>
  )
}
