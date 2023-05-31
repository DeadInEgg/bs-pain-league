import HeadDescritpion from '../components/atoms/HeadDescription'
import Redirect from '../components/molecules/Redirect'
import OfflineLayout from '../components/organisms/OfflineLayout'
import Button from '../components/atoms/Button'
import Input from '../components/atoms/Input'
import Form from '../components/molecules/Form'
import Title from '../components/atoms/Title'
import { FiMail } from 'react-icons/fi'
import newUserImg from '../public/new-user.png'
import Image from 'next/image'
import { HiKey } from 'react-icons/hi'

export default function Home() {
  return (
    <>
      <HeadDescritpion />
      <OfflineLayout>
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col h-full items-center justify-around">
            <Title size="h1">Brawl Suns</Title>
            <Form redirectUrl="/dashboard" url="auth/login">
              <div className="relative">
                <FiMail className="absolute w-6 h-6 top-2 left-2 text-zinc-400" />
                <Input
                  placeholder="E-mail"
                  id="mail"
                  name="mail"
                  type="email"
                  className="pl-10"
                />
              </div>

              <div className="relative">
                <HiKey className="absolute w-6 h-6 top-2 left-2 text-zinc-400" />
                <Input
                  placeholder="Mot de passe"
                  type="password"
                  name="password"
                  id="password"
                  className="pl-10"
                />
              </div>
              <Button>Connexion</Button>
            </Form>
            <div className="flex flex-row items-center gap-2">
              <Image
                src={newUserImg}
                alt="New user image"
                className="w-9 h-9"
              />
              <Redirect text="Pas de compte ? S'inscrire" url="/register" />
            </div>
          </div>
        </div>
      </OfflineLayout>
    </>
  )
}
