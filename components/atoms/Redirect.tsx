import Link from 'next/link'

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
        <button className="bg-gray-900 text-slate-100 h-12 px-4 border border-slate-100 rounded-md shadow-lg">
          {text}
        </button>
      ) : (
        <p className="text-slate-100 underline underline-offset-4 hover:underline-offset-8">
          {text}
        </p>
      )}
    </Link>
  )
}
