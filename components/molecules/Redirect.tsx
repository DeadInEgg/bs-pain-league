import Link from 'next/link'
import Button from '../atoms/Button'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface RedirectProps {
  url: string
  text: string
  isButton?: boolean
  goBack?: boolean
}

export default function Redirect({
  url,
  text,
  isButton = false,
  goBack = false,
}: RedirectProps) {
  return (
    <Link href={url}>
      {isButton ? (
        <Button>{text}</Button>
      ) : (
        <p className="flex flex-row items-center gap-2 hover:gap-3 text-slate-100 underline underline-offset-4 hover:text-yellow-400 hover:underline-offset-8 font-semibold">
          {goBack && <FaArrowLeft className="inherit" />}
          {text}
          {!goBack && <FaArrowRight className="inherit" />}
        </p>
      )}
    </Link>
  )
}
