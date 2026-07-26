export default function Mission({ className = "" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="8.5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="12" cy="12" r="1.8" />

                <path d="M16.8 7.2L12.8 11.2" />
                <path d="M16.8 7.2h-3" />
                <path d="M16.8 7.2v3" />
            </g>
        </svg>
    );
}