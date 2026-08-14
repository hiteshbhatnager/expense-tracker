import React from 'react';

function History(
    {
        data,
    }
) {
    return (
        <>
            {
                data.map((prev) => (
                    <div className="space-y-3" key={prev.id}>
                        {prev.add ? (
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
                        " >

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

                                        <p className="text-sm text-gray-500">
                                            {prev.source}
                                        </p>

                                    </div>

                                </div>


                                <div className="text-right">

                                    <p className="text-green-400 font-semibold">
                                        +₹{prev.expense}
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        {prev.date}
                                    </p>

                                </div>

                            </div>
                        ) : (
                            <div className="
                            flex items-center justify-between bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center font-bold"
                                    >
                                        -
                                    </div>
                                    <div>
                                        <p className="font-medium">
                                            {prev.source}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-red-400 font-semibold">
                                        -₹{prev.expense}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {prev.date}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                ))
            }
        </>
    )
}

export default History;