import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BsGraphUp, 
  BsWallet2, 
  BsHourglassSplit, 
  BsFillFileEarmarkTextFill } from 'react-icons/bs'
import MovieCard from '../components/MovieCard'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {
  const {id} = useParams()
  const {movie, setMovie} = useState(null)
  
  const getMovie = async(url) => {
    const resp = await fetch(url)
    const data = await resp.json()
    setMovie(data)
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`
    getMovie(movieUrl)
  }, [])

  return (
    <div>
      {movie && <p>{movie.title}</p>}
    </div>
  )
}

export default Movie