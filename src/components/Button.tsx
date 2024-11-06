import IButton from "../interface/IButton"

const Button:React.FC<IButton> = ({text,className}) => {
  return (
    <button
        type="submit"
        className={`flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in ${className}`}
    >
        <span className="mr-2 uppercase">{text}</span>
        <span>
            <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </span>
    </button>
  )
}

export default Button