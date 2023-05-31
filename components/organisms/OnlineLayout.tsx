import { ReactNode } from 'react'
import Navbar from '../molecules/Navbar'

interface OnlineLayout {
  children: ReactNode
}

export default function OnlineLayout({ children }: OnlineLayout) {
  return (
    <>
      <Navbar />
      <div className="w-full h-full bg-gradient-to-b from-gray-700 to-gray-900 p-8 pt-20">
        {children}
      </div>
    </>
  )
}
