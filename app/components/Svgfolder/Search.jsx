export default function Search({ className = "" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="10.8" cy="10.8" r="6.3" />
                <path d="M15.5 15.5L20 20" />
            </g>
        </svg>
    );
}