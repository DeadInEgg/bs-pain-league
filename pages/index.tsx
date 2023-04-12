import { ChangeEvent, FormEvent, useState } from 'react'
import HeadDescritpion from '../components/atoms/HeadDescription'
import Redirect from '../components/molecules/Redirect'
import OfflineLayout from '../components/organisms/OfflineLayout'
import { useRouter } from 'next/router'
import { fetchApi } from '../libs/fetchApi'
import Button from '../components/atoms/Button'

export default function Home() {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleMailChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!!error) setError('')
    setMail(e.target.value)
  }
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!!error) setError('')
    setPassword(e.target.value)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const payload = {
      mail,
      password,
    }
    const res = await fetchApi({ method: 'POST', payload, url: 'auth/login' })

    if (res.status === 401) {
      setPassword('')
      setError('Identifiants incorrects')
    }
    if (res.status === 201) router.push('/dashboard')
  }

  return (
    <>
      <HeadDescritpion />
      <OfflineLayout>
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col items-center">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <label className="flex flex-col">
                Username
                <input
                  id="mail"
                  name="mail"
                  onChange={handleMailChange}
                  type="email"
                  value={mail}
                />
              </label>
              <label className="flex flex-col">
                Mot de passe
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
              <Button>Connexion</Button>
              <span>{error}</span>
            </form>
            <Redirect text="Inscription" url="/register" isButton />
          </div>
        </div>
      </OfflineLayout>
    </>
  )
}
