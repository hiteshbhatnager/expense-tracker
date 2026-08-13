import React from "react";
import Button from "./button";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

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
                p-2
                rounded-xl
                w-[40%]
            ">
                <Button
                    text="Home"
                    onClick={() => navigate("/")}
                />


                <Button
                    text="History"
                    onClick={() => navigate("/history")}
                />

                <Button
                    text="Sign Up"
                    onClick={() => navigate("/signup")}
                />

                <Button
                    text="Login"
                    onClick={() => navigate("/login")}
                />

            </div>

        </nav>
    );
}

export default Navbar;