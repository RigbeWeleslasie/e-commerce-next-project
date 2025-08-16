const { type } = require("os");

interface ButtonProps{
    text: string;
    onClick?:()=> void;
    type?: "button" | "submit" | "reset";
    className?: string;
}

export default function Button({
    text,
    onClick,
    type="button",
    className="",

}: ButtonProps){
    return (
        <button
        type={type}
        onClick={onClick}
        className={`w-full py-3 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700 transition-colors ${className}`}>
            {text}
        </button>
    )
}