import React from 'react'
import { useNavigate } from 'react-router-dom'

const Movie = ({ img, title, year, id }) => {

    const navigate = useNavigate()

    const redirigirPagina = () => {
        navigate(`/peliculas/${id}`)
    }

    return (

        <div className="bg-gray-100 rounded-xl m-5 gap-4 flex-wrap flex flex-row justify-center items-center">

            <div className="w-60  p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                <img className=" object-cover rounded-xl  object-cover rounded-xl" src={img} alt="" />
                <div className="p-2">
                    <h2 className="font-bold text-lg mb-2 "> {title} </h2>
                    <p className="text-sm text-gray-600">
                        {year}
                    </p>
                </div>

                <div class="m-2">
                    <button onClick={redirigirPagina} className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Ver más</button>
                </div>
            </div>


        </div>

    )
}

export default Movie