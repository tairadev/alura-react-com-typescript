import React from 'react'
import styles from './MovieList.module.css'
import CardMovie, { type Movie } from '../CardMovie'

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className={styles.lista}>
      {movies.map((movie) => <CardMovie key={movie.id} {...movie} />)}
    </ul>
  )
}

export default MovieList