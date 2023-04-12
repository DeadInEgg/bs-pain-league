type FetchApi = {
  method?: string
  payload?: Record<string, unknown>
  url: string
}

export const fetchApi = ({
  method = 'GET',
  payload,
  url,
}: FetchApi): Promise<Response> => {
  const withCredentials = url !== 'auth/login'

  return fetch(`http://localhost:3001/api/${url}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...(!!payload && { body: JSON.stringify(payload) }),
    ...(withCredentials && { credentials: 'include' }),
  })
}
