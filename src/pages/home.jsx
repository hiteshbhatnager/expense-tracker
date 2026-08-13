import React from "react";
import Button from "../components/button";
import authservice from '../appwrite/auth'
import { useSelector } from "react-redux";

function Home() {

    const user = useSelector((state) => state.auth.user)

    return (
        <main className="min-h-screen bg-gray-950 text-white p-6">

            {
                user ? (
                    <p className="p-9 mx-19">Hi {user?.name?.toUpperCase()} track you expense</p>
                ) : (
                    ""
                )
            }

            {/* Balance */}
            <section className="
                max-w-5xl
                mx-auto
                bg-gray-900
                border border-gray-800
                rounded-2xl
                p-6
                shadow-xl
            ">

                <p className="text-gray-400 text-sm">
                    Total Money
                </p>

                <h1 className="
                    text-4xl
                    font-bold
                    text-green-400
                    mt-2
                ">
                    ₹0.00
                </h1>


                {/* Actions */}
                <div className="flex gap-4 mt-6">

                    <Button
                        text="+ Add Money"
                    />

                    <Button
                        text="- Spend Money"
                    />

                </div >

            </section>


            {/* History */}
            <section className="
                max-w-5xl
                mx-auto
                mt-8
            ">

                <div className="flex justify-between items-center mb-4">

                    <h2 className="text-2xl font-bold">
                        History
                    </h2>

                    <button className="
                        text-sm
                        text-gray-400
                        hover:text-white
                        transition
                    ">
                        View all
                    </button>

                </div>


                {/* Transaction list */}
                <div className="space-y-3">

                    {/* Transaction */}
                    <div className="
                        flex
                        items-center
                        justify-between
                        bg-gray-900
                        border border-gray-800
                        rounded-xl
                        p-4
                        hover:border-gray-700
                        transition
                    ">

                        <div className="flex items-center gap-4">

                            {/* Icon */}
                            <div className="
                                w-10 h-10
                                rounded-full
                                bg-green-500/10
                                text-green-400
                                flex
                                items-center
                                justify-center
                                font-bold
                            ">
                                +
                            </div>

                            <div>

                                <p className="font-medium">
                                    Money Added
                                </p>

                                <p className="text-sm text-gray-500">
                                    From Pocket Money
                                </p>

                            </div>

                        </div>


                        <div className="text-right">

                            <p className="text-green-400 font-semibold">
                                +₹0.00
                            </p>

                            <p className="text-xs text-gray-500">
                                Today
                            </p>

                        </div>

                    </div>


                    {/* Spend transaction example */}
                    <div className="
                        flex
                        items-center
                        justify-between
                        bg-gray-900
                        border border-gray-800
                        rounded-xl
                        p-4
                        hover:border-gray-700
                        transition
                    ">

                        <div className="flex items-center gap-4">

                            <div className="
                                w-10 h-10
                                rounded-full
                                bg-red-500/10
                                text-red-400
                                flex
                                items-center
                                justify-center
                                font-bold
                            ">
                                -
                            </div>

                            <div>

                                <p className="font-medium">
                                    Food
                                </p>

                                <p className="text-sm text-gray-500">
                                    College Canteen
                                </p>

                            </div>

                        </div>


                        <div className="text-right">

                            <p className="text-red-400 font-semibold">
                                -₹0.00
                            </p>

                            <p className="text-xs text-gray-500">
                                Today
                            </p>

                        </div>

                    </div>

                </div>

                <div className="flex gap-4 mt-6 flex-col">
                    <Button
                        text="Weekly"
                        onClick={() => navigate("/weekly")}
                    />

                    <Button
                        text="Monthly"
                        onClick={() => navigate("/monthly")}
                    />

                    <Button
                        text="Yearly"
                        onClick={() => navigate("/yearly")}
                    />
                </div>

            </section>

        </main>
    );
}

export default Home;