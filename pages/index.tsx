import HeadDescritpion from '../components/atoms/HeadDescription'
import Redirect from '../components/atoms/Redirect'
import OfflineLayout from '../components/organisms/OfflineLayout'

export default function Home() {
  return (
    <>
      <HeadDescritpion />
      <OfflineLayout>
        <div className="flex justify-center items-center h-full">
          <Redirect text="Inscription" url="/register" isButton />
        </div>
      </OfflineLayout>
    </>
  )
}
