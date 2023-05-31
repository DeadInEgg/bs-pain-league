import { useEffect, useState } from 'react'
import { fetchApi } from '../libs/fetchApi'
import { useRouter } from 'next/router'

type UseFetchProps = {
  method?: string
  payload?: Record<string, unknown>
  url: string
  queryParams?: Record<string, string>
}

export type UseFetchResultProps<T> = {
  data?: T
  error: string
  isLoading: boolean
}

export const useFetch = <T>({
  method = 'GET',
  payload,
  url,
  queryParams,
}: UseFetchProps): UseFetchResultProps<T> => {
  const [data, setData] = useState()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const withCredentials = url !== 'auth/login'
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchApi({ url, method, payload, queryParams })
      const json = await response.json()

      if ([200, 201, 204, 304].includes(response.status)) {
        setData(json)
      }

      if ([422].includes(response.status)) {
        setError(json)
      }

      if ([401].includes(response.status)) {
        router.push('/')
      }
    }

    fetchData().catch((err) => console.log(err))
    setIsLoading(false)
  }, [method, url, withCredentials, payload, router, queryParams])

  return { data, error, isLoading }
}
