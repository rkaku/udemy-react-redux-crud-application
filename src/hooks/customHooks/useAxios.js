import axios from 'axios'
import { useEffect, useState } from 'react'

function useAxios(url) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  async function customFetch(url) {
    try {
      const response = await axios({
        method: 'GET',
        url: url
      })
      setData(response.data)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    if (url) customFetch(url)
  }, [url])
  return [loading, error, data]
}

export default useAxios