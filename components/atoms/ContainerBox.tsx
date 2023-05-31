import { ReactNode } from 'react'

interface ContainerBoxProps {
  children: ReactNode
}

export default function ContainerBox({ children }: ContainerBoxProps) {
  return (
    <div className="inline-flex flex-row flex-wrap items-center gap-3 bg-slate-900 px-4 py-3 rounded-xl border-2 border-yellow-600">
      {children}
    </div>
  )
}
