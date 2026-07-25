export default function PredictIcon({ className = "" }) {
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
                <path d="M4.5 15.5V12.8c0-.6.3-1.2.8-1.5l1.3-3A2 2 0 0 1 8.5 7h7a2 2 0 0 1 1.9 1.3l1.3 3c.5.3.8.9.8 1.5v2.7"/>
                <path d="M6 15.5h12"/>
                <path d="M8 10.5h8"/>
                <circle cx="7.5" cy="16.5" r="1"/>
                <circle cx="16.5" cy="16.5" r="1"/>
            </g>
        </svg>
    );
}