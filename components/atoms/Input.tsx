import { ChangeEvent, useState } from 'react'

interface InputProps {
  id: string
  name: string
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  className?: string
}

export default function Input({
  id,
  name,
  type = 'text',
  placeholder,
  className,
}: InputProps) {
  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)

  return (
    <input
      placeholder={placeholder}
      id={id}
      name={name}
      onChange={handleChange}
      type={type}
      value={value}
      className={`${className} p-2 px-4 w-80 rounded-md focus:outline-none focus:shadow-custom-input focus:drop-shadow-zinc-50/50 text-zinc-900 placeholder:text-zinc-400`}
    />
  )
}
