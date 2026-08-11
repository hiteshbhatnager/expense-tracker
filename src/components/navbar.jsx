import React from "react";
import Button from "./button";

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

                <Button text="Home" to="/home" />
                <Button text="Weekly" to="weekly" />
                <Button text="Monthly" to="Monthly" />
                <Button text="Yearly" to="Yearly" />
                <Button text="History" to="History" />

            </div>

        </nav>
    );
}

export default Navbar;