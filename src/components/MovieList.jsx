import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import { getMovies } from '../helpers/getMovies'

const MovieList = ({ category }) => {

    const [movies, setMovies] = useState([])
    useEffect(() => {
        getMovies(category)
            .then(setMovies)

    }, [])





    return (

        <div className=" MovieList flex flex-col  items-center justify-center  ">
            <h1>{category}</h1>
            <div className=" card movieList flex  flex-wrap   rounded-lg shadow-xl p-6  items-center justify-center">

                {
                    movies.map((movies) => (
                        <Movie key={movies.title}
                            {...movies}
                        />
                    ))
                }

            </div>
        </div>

    )
}

export default MovieList    