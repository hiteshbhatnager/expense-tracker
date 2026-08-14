import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

function AddMoney({
    amount,
    setAmount,
    data,
    setData
}) {

    const [balance, setBalance] = useState(0)
    const [source, setSource] = useState('')
    const navigate = useNavigate()

    const onSubmit = () => {

        const currentAmount = Number(amount)
        const amountAdd = Number(balance)

        if (amountAdd <= 0) {
            return
        }

        setAmount(currentAmount + amountAdd)

        setData((previous) => [
            ...previous,
            {
                id: Date.now(),
                add: true,
                amount: amountAdd,
                source: source,
                date: new Date().toLocaleDateString()
            }
        ]);

        setBalance("")
        setSource("")
        navigate('/')
    }


    return (
        <main className="min-h-screen bg-gray-950 text-white px-4 py-10">

            <div className="max-w-lg mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <p className="text-green-400 text-sm font-medium">
                        ADD MONEY
                    </p>

                    <h1 className="text-3xl font-bold mt-1">
                        Add Money
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Add money to your balance.
                    </p>
                </div>


                {/* Form */}
                <div className="
                    bg-gray-900
                    border border-gray-800
                    rounded-2xl
                    p-6
                    space-y-6
                ">

                    {/* Amount */}
                    <Input
                        text="Amount"
                        type="number"
                        placeholder="Enter amount"
                        value={balance}
                        onChange={(e) => setBalance(e.target.value)}
                    />

                    {/* Category */}
                    <div>

                        <label className="
                            block
                            text-sm
                            font-medium
                            text-gray-300
                            mb-2
                        ">
                            Category
                        </label>

                        <select
                            className="
                                w-full
                                px-4 py-3
                                bg-gray-950
                                border border-gray-700
                                rounded-xl
                                text-white
                                outline-none
                                focus:border-green-500
                                transition
                            "
                            value={source}
                            onChange={(e) => setSource(e.target.value)}
                        >
                            <option value="">
                                Select category
                            </option>

                            <option value="salary">
                                Salary
                            </option>

                            <option value="pocket-money">
                                Pocket Money
                            </option>

                            <option value="freelance">
                                Freelance
                            </option>

                            <option value="other">
                                Other
                            </option>
                        </select>

                    </div>


                    {/* Date */}
                    <div>

                        <label className="
                            block
                            text-sm
                            font-medium
                            text-gray-300
                            mb-2
                        ">
                            Date
                        </label>

                        <input
                            type="date"
                            className="
                                w-full
                                px-4 py-3
                                bg-gray-950
                                border border-gray-700
                                rounded-xl
                                text-white
                                outline-none
                                focus:border-green-500
                            "
                        />

                    </div>


                    {/* Button */}
                    <Button
                        text="+ Add Money"
                        onClick={onSubmit}
                    />

                </div>

            </div>

        </main>
    );
}

export default AddMoney;