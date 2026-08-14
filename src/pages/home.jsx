import React, { useEffect } from "react";
import Button from "../components/button";
import authservice from '../appwrite/auth'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { List } from "../components";

function Home({
    amount,
    setAmount,
    data,
    setData
}) {

    const user = useSelector((state) => state.auth.user)
    const navigate = useNavigate()

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
                    ₹{amount}
                </h1>


                {/* Actions */}
                <div className="flex gap-4 mt-6">

                    <Button
                        text="+ Add Money"
                        onClick={() => navigate("/add")}
                    />

                    <Button
                        text="- Spend Money"
                        onClick={() => navigate("/spend")}
                    />

                </div >

            </section>

            <div className="
                max-w-5xl
                mx-auto
                mt-8
            ">
                {/* <div className="flex gap-4 mt-6 flex-col">
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
                </div> */}
            </div>

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
                    "
                        onClick={() => navigate("/history")}
                    >
                        View all
                    </button>

                </div>


                {/* Transaction list */}
                <List data={data} />

            </section>

        </main>
    );
}

export default Home;