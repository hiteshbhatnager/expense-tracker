import React from "react";

function Input({
    text = "",
    type = "text",
    placeholder = "",
    name = "",
    value = "",
    onChange,
}) {
    return (
        <div className="w-full">

            <label className="
                block
                text-sm
                font-medium
                text-gray-300
                mb-2
            ">
                {text}
            </label>

            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="
                    w-full
                    px-4 py-3
                    bg-gray-950
                    border border-gray-700
                    rounded-xl
                    text-white
                    placeholder-gray-500
                    outline-none
                    focus:border-green-500
                    focus:ring-2
                    focus:ring-green-500/20
                    transition
                "
            />

        </div>
    );
}

export default Input;