import React from 'react'

const Movie = ({ img, title, year }) => {


    return (

        <>
            <div className="m-5 ">
                <img className="w-full" src={img} alt={title} style={{ width: "300", height: "450" }} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {year}
                    </p>
                </div>
            </div>
        </>


    )
}

export default Movie