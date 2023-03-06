import { useEffect, useState } from 'react'
import { fetchApi } from '../libs/fetchApi'

type UseFetchProps = {
  method?: string
  payload?: Record<string, unknown>
  url: string
}

export const useFetch = ({ method = 'GET', payload, url }: UseFetchProps) => {
  const [data, setData] = useState()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const withCredentials = url !== 'auth/login'

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchApi({ url, method, payload })
      const json = await response.json()

      if ([200, 201, 204, 304].includes(response.status)) {
        setData(json)
      }

      if ([401, 422].includes(response.status)) {
        setError(json)
      }
    }

    fetchData().catch((err) => console.log(err))
    setIsLoading(false)
  }, [method, url, withCredentials, payload])

  return { data, error, isLoading }
}
