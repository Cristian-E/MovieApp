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

        <div className=" relative MovieList flex flex-col  items-center justify-center ">
            <div className=" p-5 flex-auto text-lg font-semibold text-slate-900  ">
                {
                    category ? <h1>Resultado de busqueda de: {category}</h1> : null
                }
            </div>
            <div className="  movieList flex  flex-wrap    items-center justify-center">

                {
                    movies?.map((movies) => (
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