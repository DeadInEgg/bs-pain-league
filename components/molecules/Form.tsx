import { useRouter } from 'next/router'
import { FormEvent, ReactNode } from 'react'
import { fetchApi } from '../../libs/fetchApi'

interface FormProps {
  children: ReactNode
  url: string
  redirectUrl?: string
}

export default function Form({ children, redirectUrl, url }: FormProps) {
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const payload = Object.fromEntries(new FormData(e.currentTarget))
    const res = await fetchApi({ method: 'POST', payload, url })
    if (res.status === 201 && redirectUrl) router.push(redirectUrl)
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {children}
    </form>
  )
}
