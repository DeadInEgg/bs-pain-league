interface TitleProps {
  children: string
  size?: 'h1' | 'h2'
}

export default function Title({ children, size = 'h2' }: TitleProps) {
  const className =
    ' font-russo-one align-middle text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600'

  const sizeClass =
    size === 'h1' ? 'md:text-8xl sm:text-6xl text-4xl' : 'md:text-4xl text-2xl'

  return <h1 className={className + ' ' + sizeClass}>{children}</h1>
}
