import React from 'react'
import { useNavigate } from 'react-router-dom'

function Button({
    type = "",
    text,
    onclick,
    to
}) {

    const navigate = useNavigate()
    return (
        <>
            <button
                onClick={() => navigate(to)}
                className="
                    px-4 py-2
                    rounded-lg
                    text-sm
                    font-medium
                    text-gray-300
                    hover:text-white
                    hover:bg-gray-700
                    transition
                ">
                {text}
            </button>
        </>
    )
}

export default Button