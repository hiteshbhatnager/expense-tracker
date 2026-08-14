import React from "react";


function List({ data = [] }) {
    return (
        <section className="w-full">

            {/* Header */}
            <div className="flex items-center justify-between mb-5">

                <div className="
                    px-3 py-1.5
                    rounded-lg
                    bg-gray-900
                    border border-gray-800
                    text-sm text-gray-400
                ">
                    {data.length} {data.length === 1 ? "transaction" : "transactions"}
                </div>

            </div>


            {/* Empty state */}
            {data.length === 0 ? (

                <div className="
                    bg-gray-900
                    border border-gray-800
                    rounded-2xl
                    p-10
                    text-center
                ">

                    <div className="
                        mx-auto
                        w-14 h-14
                        rounded-2xl
                        bg-gray-800
                        flex
                        items-center
                        justify-center
                        text-2xl
                        mb-4
                    ">
                        ₹
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                        No transactions yet
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">
                        Your income and expenses will appear here.
                    </p>

                </div>

            ) : (

                /* Transactions */
                <div className="space-y-3">

                    {data.map((prev) => (

                        <div
                            key={prev.id}
                            className="
                                group
                                flex
                                items-center
                                justify-between
                                gap-4
                                bg-gray-900
                                border border-gray-800
                                rounded-2xl
                                p-4
                                hover:bg-gray-850
                                hover:border-gray-700
                                transition-all
                                duration-200
                            "
                        >

                            {/* Left side */}
                            <div className="flex items-center gap-4 min-w-0">

                                {/* Transaction icon */}
                                <div
                                    className={`
                                        w-11 h-11
                                        shrink-0
                                        rounded-xl
                                        flex
                                        items-center
                                        justify-center
                                        text-lg
                                        font-bold
                                        ${prev.add
                                            ? "bg-green-500/10 text-green-400"
                                            : "bg-red-500/10 text-red-400"
                                        }
                                    `}
                                >
                                    {prev.add ? "+" : "−"}
                                </div>


                                {/* Information */}
                                <div className="min-w-0">

                                    <p className="
                                        font-medium
                                        text-white
                                        truncate
                                    ">
                                        {prev.source || "Unknown"}
                                    </p>

                                    <p className="
                                        text-xs
                                        text-gray-500
                                        mt-1
                                    ">
                                        {prev.add
                                            ? "Money added"
                                            : "Money spent"
                                        }
                                    </p>

                                </div>

                            </div>


                            {/* Right side */}
                            <div className="text-right shrink-0">

                                <p
                                    className={`
                                        font-semibold
                                        text-base
                                        ${prev.add
                                            ? "text-green-400"
                                            : "text-red-400"
                                        }
                                    `}
                                >
                                    {prev.add ? "+" : "−"}₹{prev.amount}
                                </p>

                                <p className="
                                    text-xs
                                    text-gray-500
                                    mt-1
                                ">
                                    {prev.date}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </section>
    );
}

export default List;