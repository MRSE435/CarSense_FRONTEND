export default function TrendingUp({ className = "" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Axes */}
            <g
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M4 19V5" />
                <path d="M4 19H20" />
            </g>

            {/* Bars */}
            <rect x="7" y="12" width="2.5" height="7" rx="0.5" fill="currentColor" />
            <rect x="11" y="9" width="2.5" height="10" rx="0.5" fill="currentColor" />
            <rect x="15" y="6" width="2.5" height="13" rx="0.5" fill="currentColor" />

            {/* Trending Up Arrow */}
            <path
                d="M7 13L11 9L14 11L18 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Arrow Head */}
            <path
                d="M16.5 7H18V8.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}