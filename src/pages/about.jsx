import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <main className="min-h-screen bg-gray-950 text-white p-6">

            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <section className="
                    bg-gray-900
                    border border-gray-800
                    rounded-2xl
                    p-8
                    shadow-xl
                ">

                    <p className="text-green-400 text-sm font-semibold uppercase tracking-wider">
                        About the project
                    </p>

                    <h1 className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        mt-3
                    ">
                        Expense<span className="text-green-400">Tracker</span>
                    </h1>

                    <p className="
                        text-gray-400
                        max-w-2xl
                        mt-5
                        leading-7
                    ">
                        ExpenseTracker is a simple personal finance application
                        designed to help you keep track of your money, monitor
                        your spending and understand your financial habits.
                    </p>

                </section>


                {/* What it does */}
                <section className="grid md:grid-cols-3 gap-5 mt-6">

                    <div className="
                        bg-gray-900
                        border border-gray-800
                        rounded-2xl
                        p-6
                        hover:border-green-500/40
                        transition
                    ">
                        <div className="text-3xl mb-4">💰</div>

                        <h2 className="text-xl font-semibold">
                            Track Money
                        </h2>

                        <p className="text-gray-400 text-sm mt-2 leading-6">
                            Keep track of money you receive and money you spend.
                        </p>
                    </div>


                    <div className="
                        bg-gray-900
                        border border-gray-800
                        rounded-2xl
                        p-6
                        hover:border-green-500/40
                        transition
                    ">
                        <div className="text-3xl mb-4">📊</div>

                        <h2 className="text-xl font-semibold">
                            Understand Spending
                        </h2>

                        <p className="text-gray-400 text-sm mt-2 leading-6">
                            Review your spending history and identify where
                            your money is going.
                        </p>
                    </div>


                    <div className="
                        bg-gray-900
                        border border-gray-800
                        rounded-2xl
                        p-6
                        hover:border-green-500/40
                        transition
                    ">
                        <div className="text-3xl mb-4">⚡</div>

                        <h2 className="text-xl font-semibold">
                            Keep It Simple
                        </h2>

                        <p className="text-gray-400 text-sm mt-2 leading-6">
                            A clean interface focused on quickly recording
                            and viewing transactions.
                        </p>
                    </div>

                </section>


                {/* Technology */}
                <section className="
                    mt-6
                    bg-gray-900
                    border border-gray-800
                    rounded-2xl
                    p-7
                ">

                    <h2 className="text-2xl font-bold">
                        Built With
                    </h2>

                    <div className="flex flex-wrap gap-3 mt-5">

                        {[
                            "React",
                            "React Router",
                            "Redux Toolkit",
                            "Appwrite",
                            "Tailwind CSS"
                        ].map((tech) => (

                            <span
                                key={tech}
                                className="
                                    px-4 py-2
                                    rounded-xl
                                    bg-gray-800
                                    border border-gray-700
                                    text-gray-300
                                    text-sm
                                "
                            >
                                {tech}
                            </span>

                        ))}

                    </div>

                </section>


                {/* Developer */}
                <section className="
                    mt-6
                    bg-gradient-to-br
                    from-gray-900
                    to-gray-950
                    border border-gray-800
                    rounded-2xl
                    p-7
                    flex flex-col md:flex-row
                    justify-between
                    gap-6
                ">

                    <div>

                        <p className="text-green-400 text-sm">
                            Developer
                        </p>

                        <h2 className="text-2xl font-bold mt-2">
                            Hitesh Bhatnager
                        </h2>

                        <p className="text-gray-400 mt-2">
                            Built with React while learning modern
                            frontend and backend development.
                        </p>

                    </div>

                    <div className="flex gap-3 items-center">

                        <a
                            href="https://github.com/hiteshbhatnager"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                px-4 py-2
                                rounded-xl
                                bg-gray-800
                                border border-gray-700
                                hover:border-green-500
                                hover:text-green-400
                                transition
                            "
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.instagram.com/hitesh.6268/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                px-4 py-2
                                rounded-xl
                                bg-gray-800
                                border border-gray-700
                                hover:border-pink-500
                                hover:text-pink-400
                                transition
                            "
                        >
                            Instagram
                        </a>

                    </div>

                </section>


                {/* Back */}
                <div className="mt-6">

                    <Link
                        to="/"
                        className="
                            text-gray-400
                            hover:text-white
                            transition
                        "
                    >
                        ← Back to Home
                    </Link>

                </div>

            </div>

        </main>
    );
}

export default About;