interface TitleProps {
  children: string
}

export default function Title({ children }: TitleProps) {
  return <h1 className="text-slate-100">{children}</h1>
}
