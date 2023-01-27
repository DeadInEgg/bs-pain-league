import { ReactNode } from 'react'
import Navbar from '../molecules/Navbar'

interface OfflineLayout {
  children: ReactNode
}

export default function OfflineLayout({ children }: OfflineLayout) {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen bg-slate-500 mt-12 p-5">{children}</div>
    </>
  )
}
