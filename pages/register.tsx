import HeadDescritpion from '../components/atoms/HeadDescription'
import Redirect from '../components/molecules/Redirect'
import OfflineLayout from '../components/organisms/OfflineLayout'
import Button from '../components/atoms/Button'
import Input from '../components/atoms/Input'
import Form from '../components/molecules/Form'
import Title from '../components/atoms/Title'
import { FaUserAlt } from 'react-icons/fa'
import { HiKey, HiOutlineKey } from 'react-icons/hi'
import { FiMail } from 'react-icons/fi'

export default function Register() {
  return (
    <>
      <HeadDescritpion />
      <OfflineLayout>
        <Redirect text="Retour à l'accueil" url="/" goBack />
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col">
            <div className="mb-5">
              <Title>Créer un compte</Title>
            </div>
            <Form url="/users" redirectUrl="/">
              <div className="relative">
                <FaUserAlt className="absolute w-6 h-6 top-2 left-2 text-zinc-400" />
                <Input
                  id="username"
                  name="username"
                  placeholder="Nom d'utilisateur"
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <FiMail className="absolute w-6 h-6 top-2 left-2 text-zinc-400" />
                <Input
                  id="mail"
                  name="mail"
                  type="email"
                  placeholder="Email"
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <HiKey className="absolute w-6 h-6 top-2 left-2 text-zinc-400" />
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Mot de passe"
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <HiOutlineKey className="absolute w-6 h-6 top-2 left-2 text-zinc-400" />
                <Input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirmer le mot de passe"
                  className="pl-10"
                />
              </div>
              <Button>S&apos;inscire</Button>
            </Form>
          </div>
        </div>
      </OfflineLayout>
    </>
  )
}
