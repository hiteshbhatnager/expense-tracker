function Button({
    type = "button",
    text,
    onClick,
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="
                w-full
                px-4 py-3
                rounded-xl
                bg-green-500
                text-gray-950
                font-semibold
                hover:bg-green-400
                active:scale-[0.98]
                transition
            "
        >
            {text}
        </button>
    );
}

export default Button;