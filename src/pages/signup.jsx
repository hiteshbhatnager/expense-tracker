import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/input";
import Button from "../components/button";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from '../context/authslice'

function Signup() {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);

            const user = await authService.signup(form);
            dispatch(login(user))

            navigate("/");

        } catch (error) {
            setError(error.message);

        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4">

            <div className="w-full max-w-md">

                <div className="
                    bg-gray-900
                    border border-gray-800
                    rounded-2xl
                    p-7
                ">

                    <h1 className="text-3xl font-bold">
                        Create Account
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Start tracking your money.
                    </p>

                    {error && (
                        <p className="text-red-400 text-sm mt-4">
                            {error}
                        </p>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="mt-6 space-y-5"
                    >

                        <Input
                            text="Name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            value={form.name}
                            onChange={handleChange}
                        />

                        <Input
                            text="Email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={handleChange}
                        />

                        <Input
                            text="Password"
                            name="password"
                            type="password"
                            placeholder="Create password"
                            value={form.password}
                            onChange={handleChange}
                        />

                        <Button
                            type="submit"
                            text={loading ? "Creating..." : "Create Account"}
                        />

                    </form>

                    <p className="text-gray-400 text-sm text-center mt-6">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-green-400"
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