import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

function SpendMoney({
    amount,
    setAmount,
    data,
    setData
}) {

    const [balance, setBalance] = useState("")
    const navigate = useNavigate()

    const onSubmit = () => {

        const currentAmount = Number(amount)
        const amountSpend = Number(balance)

        if (amountSpend <= 0) {
            return
        }

        if (amountSpend > currentAmount) {
            alert("you don't have enough money")
        }

        setAmount(currentAmount - amountSpend)

        setBalance("")
        navigate('/')
    }

    return (
        <main className="min-h-screen bg-gray-950 text-white px-4 py-10">

            <div className="max-w-lg mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <p className="text-red-400 text-sm font-medium">
                        SPEND MONEY
                    </p>

                    <h1 className="text-3xl font-bold mt-1">
                        Spend Money
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Record where your money went.
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
                                focus:border-red-500
                                transition
                            "
                        >
                            <option value="">
                                Select category
                            </option>

                            <option value="food">
                                Food
                            </option>

                            <option value="travel">
                                Travel
                            </option>

                            <option value="shopping">
                                Shopping
                            </option>

                            <option value="education">
                                Education
                            </option>

                            <option value="entertainment">
                                Entertainment
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
                                focus:border-red-500
                            "
                        />

                    </div>


                    {/* Button */}
                    <Button
                        text="- Spend Money"
                        onClick={onSubmit}
                    />

                </div>

            </div>

        </main>
    );
}

export default SpendMoney;