import React from "react";

function Footer() {
    return (
        <footer className="w-full bg-gray-950 border-t border-gray-800 mt-20">

            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* Main footer */}
                <div className="flex flex-col md:flex-row justify-between gap-10">

                    {/* Brand */}
                    <div className="max-w-sm">

                        <div className="flex items-center gap-3">

                            <div className="
                                w-11 h-11
                                rounded-xl
                                bg-green-500
                                flex items-center justify-center
                                text-gray-950
                                font-black
                                text-xl
                                shadow-lg shadow-green-500/20
                            ">
                                ₹
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-white">
                                    Expense<span className="text-green-400">Tracker</span>
                                </h2>

                                <p className="text-xs text-gray-500">
                                    Track smarter. Spend better.
                                </p>
                            </div>

                        </div>

                        <p className="
                            mt-5
                            text-sm
                            leading-6
                            text-gray-400
                        ">
                            A simple and powerful way to understand
                            where your money goes.
                        </p>

                    </div>


                    {/* Navigation */}
                    <div>

                        <h3 className="
                            text-sm
                            font-semibold
                            text-white
                            mb-4
                        ">
                            Explore
                        </h3>

                        <div className="space-y-3">

                            <a
                                href="#"
                                className="block text-sm text-gray-400 hover:text-green-400 transition"
                            >
                                Dashboard
                            </a>

                            <a
                                href="#"
                                className="block text-sm text-gray-400 hover:text-green-400 transition"
                            >
                                History
                            </a>

                            <a
                                href="#"
                                className="block text-sm text-gray-400 hover:text-green-400 transition"
                            >
                                Analytics
                            </a>

                        </div>

                    </div>


                    {/* Connect */}
                    <div>

                        <h3 className="
                            text-sm
                            font-semibold
                            text-white
                            mb-4
                        ">
                            Connect
                        </h3>

                        <div className="flex gap-3">

                            <a
                                href="https://github.com/hiteshbhatnager"
                                className="
                                    w-10 h-10
                                    rounded-xl
                                    bg-gray-900
                                    border border-gray-800
                                    flex items-center justify-center
                                    text-gray-400
                                    hover:text-white
                                    hover:border-gray-600
                                    transition
                                "
                                aria-label="GitHub"
                            >
                                GH
                            </a>

                            <a
                                href="mailto:example@email.com"
                                className="
                                    w-10 h-10
                                    rounded-xl
                                    bg-gray-900
                                    border border-gray-800
                                    flex items-center justify-center
                                    text-gray-400
                                    hover:text-green-400
                                    hover:border-green-500/40
                                    transition
                                "
                                aria-label="Contact"
                            >
                                @
                            </a>

                        </div>

                    </div>

                </div>


                {/* Bottom */}
                <div className="
                    mt-10
                    pt-6
                    border-t border-gray-800
                    flex flex-col sm:flex-row
                    justify-between
                    items-center
                    gap-3
                    text-xs
                    text-gray-500
                ">

                    <p>
                        © 2026 ExpenseTracker. Built with React.
                    </p>

                    <p className="flex items-center gap-1">
                        Made with
                        <span className="text-red-400">♥</span>
                        by Hitesh
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;