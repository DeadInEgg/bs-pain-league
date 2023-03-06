import Link from 'next/link'
import Button from '../atoms/Button'

interface RedirectProps {
  url: string
  text: string
  isButton?: boolean
}

export default function Redirect({
  url,
  text,
  isButton = false,
}: RedirectProps) {
  return (
    <Link href={url}>
      {isButton ? (
        <Button>{text}</Button>
      ) : (
        <p className="text-slate-100 underline underline-offset-4 hover:underline-offset-8">
          {text}
        </p>
      )}
    </Link>
  )
}
