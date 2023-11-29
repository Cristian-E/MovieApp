import PropTypes from 'prop-types'
import React, { useState } from 'react'

const AddCategory = ({ setCategorias }) => {

    const [inputValue, setInputValue] = useState("")
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length > 2) {

            setCategorias(cats => [inputValue, ...cats])
            setInputValue("")
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="border border-gray-300 p-2 rounded-lg shadow-md hover:border-blue-500 focus:outline-none focus:ring focus:border-blue-500 p-2 rounded-md"

                type="text"
                value={inputValue}
                onChange={handleInputChange}
                name=""
                id="" />
        </form>
    )
}

AddCategory.PropTypes = {
    setCategorias: PropTypes.func.isRequired
}





export default AddCategory