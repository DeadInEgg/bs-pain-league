import { useRouter } from 'next/router'
import HeadDescritpion from '../components/atoms/HeadDescription'
import OnlineLayout from '../components/organisms/OnlineLayout'
import { useFetch } from '../hooks/useFetch'
import { fetchApi } from '../libs/fetchApi'

export default function Dashboard() {
  const router = useRouter()

  const {
    data: user,
    isLoading,
    error,
  } = useFetch({
    url: 'users/me',
  })

  const logout = async () => {
    const res = await fetchApi({ url: 'auth/logout' })
    if (res.status === 200) router.push('/')
  }

  if (error) router.push('/')

  if (!user || isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <HeadDescritpion />
      <OnlineLayout>
        <button
          onClick={logout}
          className="bg-gray-900 text-slate-100 h-12 px-4 border border-slate-100 rounded-md shadow-lg"
        >
          Déconnexion
        </button>
        <div className="flex justify-center items-center h-full">Online</div>
      </OnlineLayout>
    </>
  )
}
