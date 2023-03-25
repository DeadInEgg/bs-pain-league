import { ReactNode } from 'react'

interface OfflineLayout {
  children: ReactNode
}

export default function OfflineLayout({ children }: OfflineLayout) {
  return (
    <div className="w-screen h-screen flex">
      <div className="bg-home w-full h-full bg-cover shadow-custom-bg-home"></div>
      <div className="w-full h-full bg-gradient-to-b from-gray-700 to-gray-900 p-5">
        {children}
      </div>
    </div>
  )
}
