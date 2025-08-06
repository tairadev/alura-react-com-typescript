import { useEffect, useState, useCallback } from "react"
import { type Movie } from "../types"

const useFilterMovies = (movies: Movie[]) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])

  const handleSearch = useCallback(() => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredMovies(filtered)
  }, [movies, searchTerm])

  useEffect(() => {
    setFilteredMovies(movies)
  }, [movies])

  useEffect(() => {
    if (searchTerm.length === 0) handleSearch()
  }, [searchTerm, handleSearch])

  return { searchTerm, setSearchTerm, filteredMovies, handleSearch }
}

export default useFilterMovies
