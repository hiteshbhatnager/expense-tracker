import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/input";
import Button from "../components/button";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../context/authslice";

function Login() {
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const [form, setForm] = useState({
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

            await authService.login(form);
            const user = await authService.getuser();

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
                        Welcome Back
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Login to your ExpenseTracker.
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
                            placeholder="Your password"
                            value={form.password}
                            onChange={handleChange}
                        />

                        <Button
                            type="submit"
                            text={loading ? "Logging in..." : "Login"}
                        />

                    </form>

                    <p className="text-gray-400 text-sm text-center mt-6">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-green-400"
                        >
                            Sign up
                        </Link>
                    </p>

                </div>

            </div>

        </main>
    );
}

export default Login;