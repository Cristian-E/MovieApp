import React, { useState } from 'react'

const AddCategory = ({ setCategorias }) => {

    const [inputValue, setInputValue] = useState("")
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length > 2) {

            setCategorias(cats => [inputValue])
            setInputValue("")
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="border w-700 border-gray-300 p-2 rounded-lg shadow-md hover:border-blue-500 focus:outline-none focus:ring focus:border-blue-500 rounded-md"

                type="text"
                value={inputValue}
                onChange={handleInputChange}
                name=""
                id="" />
            <button onClick={handleSubmit} >
                <i class="fa-solid p-5 fa-magnifying-glass input-search "></i>
            </button>
        </form>
    )
}






export default AddCategory