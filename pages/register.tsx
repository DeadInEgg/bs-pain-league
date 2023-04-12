import HeadDescritpion from '../components/atoms/HeadDescription'
import Redirect from '../components/molecules/Redirect'
import OfflineLayout from '../components/organisms/OfflineLayout'

export default function Register() {
  return (
    <>
      <HeadDescritpion />
      <OfflineLayout>
        <Redirect text="<- Retour à l'accueil" url="/" />
      </OfflineLayout>
    </>
  )
}
