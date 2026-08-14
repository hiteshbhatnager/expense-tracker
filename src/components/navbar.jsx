import React, { useEffect, useState } from "react";
import Button from "./button";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../context/authslice";

function Navbar() {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const user = useSelector((state) => state.auth.user)

    const handleLogout = async () => {

        try {
            await authService.logout();

            dispatch(logout())

            navigate("/login");

        } catch (error) {
            console.error(error);
        }
    };

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
            <div
                onClick={() => navigate("/")}
                className="
                    text-2xl
                    font-bold
                    text-white
                    tracking-tight
                    cursor-pointer
                "
            >
                Expense<span className="text-green-400">Tracker</span>
            </div>


            {/* Navigation */}
            <div className="
                flex items-center
                gap-2
                bg-gray-800
                p-3
                rounded-xl
            ">

                <Button
                    text="Home"
                    onClick={() => navigate("/")}
                />

                <Button
                    text="History"
                    onClick={() => navigate("/history")}
                />

                {/* Authentication */}
                {user ? (

                    <Button
                        text="Logout"
                        onClick={handleLogout}
                    />

                ) : (

                    <>
                        <Button
                            text="Sign Up"
                            onClick={() => navigate("/signup")}
                        />

                        <Button
                            text="Login"
                            onClick={() => navigate("/login")}
                        />
                    </>

                )}

            </div>

        </nav>
    );
}

export default Navbar;