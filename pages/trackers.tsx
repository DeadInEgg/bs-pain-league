import HeadDescritpion from '../components/atoms/HeadDescription'
import Redirect from '../components/molecules/Redirect'
import OnlineLayout from '../components/organisms/OnlineLayout'

export default function Trackers() {
  return (
    <>
      <HeadDescritpion />
      <OnlineLayout>
        <span>Tracker créé !</span>
        <Redirect url="/dashboard" text="Retour dashboard" />
      </OnlineLayout>
    </>
  )
}
