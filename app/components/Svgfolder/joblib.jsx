export default function Joblib({ className = "" }) {
    return (
        <svg
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            fill="none"
        >
            <rect
                x="17"
                y="14"
                width="30"
                height="36"
                rx="5"
                fill="#1976D2"
            />

            <path
                d="M24 24H40"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
            />

            <path
                d="M24 32H40"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
            />

            <path
                d="M24 40H35"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
            />

            <path
                d="M43 14L50 21V50H47"
                stroke="#42A5F5"
                strokeWidth="2.5"
                strokeLinejoin="round"
            />
        </svg>
    );
}