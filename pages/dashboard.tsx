import HeadDescritpion from '../components/atoms/HeadDescription'
import OnlineLayout from '../components/organisms/OnlineLayout'
import { useFetch } from '../hooks/useFetch'
import Button from '../components/atoms/Button'
import Input from '../components/atoms/Input'
import Form from '../components/molecules/Form'
import Title from '../components/atoms/Title'
import Redirect from '../components/molecules/Redirect'

interface Tracker {
  name: string
  hash: string
  tag?: string
}

export default function Dashboard() {
  const { data: user, isLoading: isUserLoading } = useFetch({
    url: 'users/me',
  })

  const { data: trackers, isLoading: isTrackersLoading } = useFetch<Tracker[]>({
    url: 'trackers',
  })

  if (!user || !trackers || isUserLoading || isTrackersLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <HeadDescritpion />
      <OnlineLayout>
        <div className="flex flex-col md:flex-row justify-around items-center h-full">
          <div className="flex flex-col items-center">
            <Title>Trackers : </Title>
            <ul>
              {trackers.map((tracker) => (
                <li key={tracker.hash}>
                  <Redirect
                    url={`tracker/${tracker.hash}/games`}
                    text={tracker.name}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <Form url="/trackers">
              <Input id="name" name="name" placeholder="Nom du tracker" />
              <Input id="tag" name="tag" placeholder="Tag du joueur" />
              <Button>Créer</Button>
            </Form>
          </div>
        </div>
      </OnlineLayout>
    </>
  )
}
