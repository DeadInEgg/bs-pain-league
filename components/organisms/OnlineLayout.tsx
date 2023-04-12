import { ReactNode } from 'react'
import Drawer from '../molecules/Drawer'

interface OnlineLayout {
  children: ReactNode
}

export default function OnlineLayout({ children }: OnlineLayout) {
  return (
    <>
      <Drawer />
      <div className="w-screen h-screen bg-slate-500 p-5 ml-36">{children}</div>
    </>
  )
}
