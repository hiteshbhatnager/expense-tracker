import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/input";
import Button from "../components/button";

function Signup() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Appwrite signup logic will go here
        console.log(form);
    };

    return (
        <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4">

            <div className="w-full max-w-md">

                {/* Brand */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold">
                        Expense<span className="text-green-400">Tracker</span>
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Start managing your money smarter.
                    </p>
                </div>


                {/* Card */}
                <div className="
                    bg-gray-900
                    border border-gray-800
                    rounded-2xl
                    p-7
                    shadow-2xl
                ">

                    <h2 className="text-2xl font-bold">
                        Create account
                    </h2>

                    <p className="text-gray-400 text-sm mt-2">
                        Create your account to start tracking expenses.
                    </p>


                    <form
                        onSubmit={handleSubmit}
                        className="mt-6 space-y-5"
                    >

                        <Input
                            text="Name"
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                        />

                        <Input
                            text="Email"
                            type="email"
                            placeholder="you@example.com"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                        />

                        <Input
                            text="Password"
                            type="password"
                            placeholder="Create a password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                        />

                        <Button
                            type="submit"
                            text="Create Account"
                        />

                    </form>


                    <p className="
                        text-center
                        text-sm
                        text-gray-400
                        mt-6
                    ">
                        Already have an account?{" "}

                        <Link
                            to="/login"
                            className="text-green-400 hover:text-green-300"
                        >
                            Login
                        </Link>
                    </p>

                </div>

            </div>

        </main>
    );
}

export default Signup;