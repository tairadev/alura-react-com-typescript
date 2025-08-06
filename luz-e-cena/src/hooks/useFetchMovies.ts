import { useEffect, useState } from 'react'
import type { Movie } from '../types'
import { getMovies } from '../services'

const useFetchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const resMovies = await getMovies()
        setMovies(resMovies);
      } catch (err) {
        setError("Erro ao buscar filmes. Tente novamente!")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovies()
  }, [])

  return { movies, isLoading, error }
}

export default useFetchMovies