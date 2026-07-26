export default function Brain({ className = "" }) {
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
                <path d="M9.5 4.2A3.2 3.2 0 0 0 6 5.5a3.4 3.4 0 0 0-2.1 5.8A3.3 3.3 0 0 0 6 17.5a3.2 3.2 0 0 0 3.5 2.3" />
                <path d="M14.5 4.2A3.2 3.2 0 0 1 18 5.5a3.4 3.4 0 0 1 2.1 5.8A3.3 3.3 0 0 1 18 17.5a3.2 3.2 0 0 1-3.5 2.3" />

                <path d="M9.5 4.2v15.6" />
                <path d="M14.5 4.2v15.6" />

                <path d="M6 8.2c1.2 0 2.2.8 2.2 2" />
                <path d="M6 13.8c1.2 0 2.2-.8 2.2-2" />

                <path d="M18 8.2c-1.2 0-2.2.8-2.2 2" />
                <path d="M18 13.8c-1.2 0-2.2-.8-2.2-2" />

                <path d="M9.5 7.5c1.1 0 2 .7 2 1.8" />
                <path d="M14.5 7.5c-1.1 0-2 .7-2 1.8" />

                <path d="M9.5 16.5c1.1 0 2-.7 2-1.8" />
                <path d="M14.5 16.5c-1.1 0-2-.7-2-1.8" />
            </g>
        </svg>
    );
}