import React from "react";

function Contact() {
    return (
        <main className="min-h-screen bg-gray-950 text-white p-6">

            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <section className="
                    bg-gray-900
                    border border-gray-800
                    rounded-2xl
                    p-8
                ">

                    <p className="
                        text-green-400
                        text-sm
                        font-semibold
                        uppercase
                        tracking-wider
                    ">
                        Get in touch
                    </p>

                    <h1 className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        mt-3
                    ">
                        Contact
                    </h1>

                    <p className="
                        text-gray-400
                        mt-4
                        max-w-xl
                        leading-7
                    ">
                        Have a suggestion, found a bug, or just want to
                        connect? You can find me through the links below.
                    </p>

                </section>


                {/* Contact cards */}
                <section className="grid md:grid-cols-2 gap-5 mt-6">

                    {/* GitHub */}
                    <a
                        href="https://github.com/hiteshbhatnager"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group
                            bg-gray-900
                            border border-gray-800
                            rounded-2xl
                            p-7
                            hover:border-green-500/50
                            transition
                        "
                    >

                        <div className="
                            w-12 h-12
                            rounded-xl
                            bg-gray-800
                            flex items-center justify-center
                            text-xl
                            group-hover:bg-green-500
                            group-hover:text-gray-950
                            transition
                        ">
                            GH
                        </div>

                        <h2 className="text-xl font-semibold mt-5">
                            GitHub
                        </h2>

                        <p className="text-gray-400 mt-2">
                            hiteshbhatnager
                        </p>

                        <p className="
                            text-sm
                            text-green-400
                            mt-4
                        ">
                            View my projects →
                        </p>

                    </a>


                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/hitesh.6268/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group
                            bg-gray-900
                            border border-gray-800
                            rounded-2xl
                            p-7
                            hover:border-pink-500/50
                            transition
                        "
                    >

                        <div className="
                            w-12 h-12
                            rounded-xl
                            bg-gray-800
                            flex items-center justify-center
                            text-xl
                            group-hover:bg-pink-500
                            group-hover:text-white
                            transition
                        ">
                            IG
                        </div>

                        <h2 className="text-xl font-semibold mt-5">
                            Instagram
                        </h2>

                        <p className="text-gray-400 mt-2">
                            @hitesh.6268
                        </p>

                        <p className="
                            text-sm
                            text-pink-400
                            mt-4
                        ">
                            Follow me →
                        </p>

                    </a>

                </section>


                {/* Message */}
                <section className="
                    mt-6
                    bg-gray-900
                    border border-gray-800
                    rounded-2xl
                    p-7
                ">

                    <h2 className="text-2xl font-bold">
                        Have an idea?
                    </h2>

                    <p className="
                        text-gray-400
                        mt-3
                        leading-7
                    ">
                        ExpenseTracker is a learning project, so feedback
                        and ideas for new features are always welcome.
                    </p>

                    <div className="
                        mt-6
                        p-4
                        rounded-xl
                        bg-green-500/10
                        border border-green-500/20
                        text-green-300
                        text-sm
                    ">
                        🚀 More features are coming as the project grows.
                    </div>

                </section>

            </div>

        </main>
    );
}

export default Contact;