import { useRouter } from 'next/router'
import { fetchApi } from '../../libs/fetchApi'
import { AiOutlineLogout } from 'react-icons/ai'
export default function LogoutButton() {
  const router = useRouter()

  const logout = async () => {
    const res = await fetchApi({ url: 'auth/logout' })
    if (res.status === 200) router.push('/')
    if (res.status === 401) router.push('/')
  }

  return (
    <button className="w-full h-full">
      <AiOutlineLogout
        onClick={logout}
        className="w-full h-full text-yellow-500 hover:text-amber-600 "
      />
    </button>
  )
}
