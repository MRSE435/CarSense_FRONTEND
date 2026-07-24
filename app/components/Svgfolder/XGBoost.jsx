export default function XGBoost({ className = "" }) {
    return (
        <svg
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="xgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4FC3F7" />
                    <stop offset="100%" stopColor="#1565C0" />
                </linearGradient>
            </defs>

            <text
                x="32"
                y="42"
                textAnchor="middle"
                fontSize="28"
                fontWeight="800"
                fontFamily="Inter, Arial, sans-serif"
                fontStyle="italic"
                fill="url(#xgGradient)"
            >
                XG
            </text>

            <path
                d="M42 18 L50 10"
                stroke="#1565C0"
                strokeWidth="2.5"
                strokeLinecap="round"
            />

            <path
                d="M46 10 H50 V14"
                fill="none"
                stroke="#1565C0"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}