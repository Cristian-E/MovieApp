import React, { useState } from 'react'
import AddCategory from './AddCategory'
import MovieList from './MovieList'

const Category = () => {

    const [categorias, setCategorias] = useState([""])


    return (
        <div className="  flex flex-col flex-wrap   rounded-lg  p-6  items-center justify-center">
            <h1 class="p-5 flex-auto text-lg font-semibold text-slate-900">
                Buscador de Películas
            </h1>
            <AddCategory setCategorias={setCategorias} />


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