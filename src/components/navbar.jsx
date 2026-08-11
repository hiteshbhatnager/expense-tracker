import React from "react";

function Navbar() {
    return (
        <nav className="
            w-full
            px-6 py-4
            bg-gray-900
            border-b border-gray-800
            flex items-center justify-between
            sticky top-0
            z-50
        ">

            {/* Logo */}
            <div className="
                text-2xl
                font-bold
                text-white
                tracking-tight
            ">
                Expense<span className="text-green-400">Tracker</span>
            </div>


            {/* Navigation */}
            <div className="
                flex items-center
                gap-2
                bg-gray-800
                p-1
                rounded-xl
            ">

                <button className="
                    px-4 py-2
                    rounded-lg
                    text-sm
                    font-medium
                    text-gray-300
                    hover:text-white
                    hover:bg-gray-700
                    transition
                ">
                    Home
                </button>

                <button className="
                    px-4 py-2
                    rounded-lg
                    text-sm
                    font-medium
                    text-gray-300
                    hover:text-white
                    hover:bg-gray-700
                    transition
                ">
                    Weekly
                </button>


                <button className="
                    px-4 py-2
                    rounded-lg
                    text-sm
                    font-medium
                    text-gray-300
                    hover:text-white
                    hover:bg-gray-700
                    transition
                ">
                    Monthly
                </button>

                <button className="
                    px-4 py-2
                    rounded-lg
                    text-sm
                    font-medium
                    text-gray-300
                    hover:text-white
                    hover:bg-gray-700
                    transition
                ">
                    Yearly
                </button>

                <button className="
                    px-4 py-2
                    rounded-lg
                    text-sm
                    font-medium
                    text-gray-300
                    hover:text-white
                    hover:bg-gray-700
                    transition
                ">
                    History
                </button>

            </div>

        </nav>
    );
}

export default Navbar;