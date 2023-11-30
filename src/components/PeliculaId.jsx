import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovie } from '../helpers/getMovie'


import { dotPulse } from 'ldrs'
import MovieList from './MovieList'



const PeliculaId = () => {
    dotPulse.register() //!loading screen

    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {
        if (id) {
            const fetchPelicula = async () => {
                try {
                    const data = await getMovie(id)
                    setMovie(data)
                    setLoading(false)

                } catch (error) {
                    setError(error)
                    setLoading(false)
                }
            }
            fetchPelicula()
        }

    }, [id])

    if (loading) {
        return (
            <div className=" flex h-screen w-screen items-center justify-center"  >
                <l-dot-pulse
                    size="200"
                    speed="1.3"
                    color="black">

                </l-dot-pulse >
            </div>
        )
    }

    if (error) {
        return <h1> Hubo un error.</h1>
    }

    console.log(movie);


    return (
        <div className="h-screen  flex-wrap flex flex-row  items-center p-6
            bg-gradient-to-r from-gray-100 to-gray-300">
            <div className="flex flex-row">
                <div className=" p-2 bg-white h-full  rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img className=" rounded-xl object-cover rounded-xl" src={movie.Poster} alt={movie.Title} />
                </div>

                <div className="p-2 m-5">
                    <h2 className="font-bold text-lg mb-2 ">
                        Title:  {movie.Title}
                    </h2>
                    <p className="text-sm text-gray-600">
                        <b> Plot:</b> {movie.Plot}
                    </p>
                    <p className="text-sm text-gray-600">
                        <b> Year:</b> {movie.Year}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default PeliculaId



dotPulse.register()
