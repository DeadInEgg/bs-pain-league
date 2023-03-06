interface ButtonProps {
  children: string
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-gray-900 text-slate-100 h-12 px-4 border border-slate-100 rounded-md shadow-lg">
      {children}
    </button>
  )
}
