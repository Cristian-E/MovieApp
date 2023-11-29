import React, { useEffect, useState } from 'react'
import AddCategory from './AddCategory'
import MovieList from './MovieList'

const Category = () => {

    const [categorias, setCategorias] = useState([""])


    return (
        <div className=" movieList flex flex-col flex-wrap   rounded-lg shadow-xl p-6  items-center justify-center">
            <h1 className="m-5">Ingrese el nick de su peli</h1>
            <AddCategory setCategorias={setCategorias} />

            {/* <button onClick={handleButton}  >Agregar panchos</button> */}

            <div className="category">
                {
                    categorias.map((categorias) => (
                        <MovieList
                            key={categorias}
                            category={categorias}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default Category