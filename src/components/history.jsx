import React, { useEffect } from "react";
import { List } from './index'
import database from "../appwrite/database/db";
import { useSelector } from "react-redux";

function History(
    {
        data,
        setData
    }
) {

    const user = useSelector((state) => state.auth.user)

    useEffect(() => {
        const getHistory = async () => {
            if (!user) {
                return
            }
            try {
                const result = await database.getTransactions(user.$id)
                setData(result.documents);

            } catch (error) {

                console.error("Failed to get history:", error);

            }
        }

        getHistory()

    }, [user, setData])

    return (
        <main className="min-h-screen bg-gray-950 text-white px-4 py-10">

            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <p className="text-green-400 text-sm font-medium tracking-wide">
                        TRANSACTIONS
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold mt-1">
                        History
                    </h1>

                    <p className="text-gray-500 mt-2">
                        View all your income and expenses.
                    </p>
                </div>

                {/* List will be rendered here */}
                <div className="space-y-3">
                    <List data={data} />
                </div>

            </div>

        </main>
    );
}

export default History;