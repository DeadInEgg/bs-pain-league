type FetchApi = {
  method?: string
  payload?: Record<string, unknown>
  url: string
  queryParams?: Record<string, string>
}

export const fetchApi = ({
  method = 'GET',
  payload,
  url,
  queryParams,
}: FetchApi): Promise<Response> => {
  const withCredentials = url !== 'auth/login'
  const searchParams = !!queryParams
    ? `?${new URLSearchParams(queryParams)}`
    : ''

  return fetch(`http://localhost:3001/api/${url}${searchParams}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...(!!payload && { body: JSON.stringify(payload) }),
    ...(withCredentials && { credentials: 'include' }),
  })
}
