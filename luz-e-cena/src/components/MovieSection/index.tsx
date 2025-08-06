import React, { useEffect, useState } from 'react'
import styles from './MovieSection.module.css'
import Fieldset from '../Fieldset'
import InputText from '../InputText'
import Button from '../Button'
import { FaSearch } from 'react-icons/fa'
import MovieList from '../MovieList'
import type { Movie } from '../../types'
import { getMovies } from '../../services'

const MovieSection = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const resMovies = await getMovies()
        setMovies(resMovies);
      } catch (err) {
        console.error("Erro ao buscar os filmes" + err)
      }
    }

    fetchMovies()
  }, [])

  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant="secondary">
          <InputText placeholder="Buscar filmes..." />
          <Button variant="icon">
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.title}>Em cartaz</h1>
        <MovieList movies={movies} />
      </section>
    </main>
  )
}

export default MovieSection