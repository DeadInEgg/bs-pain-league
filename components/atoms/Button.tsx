interface ButtonProps {
  children: string
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-gradient-to-r from-yellow-500 to-amber-600 text-zinc-50 hover:from-yellow-600 hover:to-amber-700 h-12 px-4 rounded-lg ">
      {children}
    </button>
  )
}
