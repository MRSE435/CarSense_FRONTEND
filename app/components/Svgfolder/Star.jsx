export default function Star({ className = "" }) {
    return (
        <svg
            viewBox="0 0 20 20"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <polygon
                fill="currentColor"
                points="
          10,1
          12.6,7
          19,7.6
          14,12
          15.5,19
          10,15.5
          4.5,19
          6,12
          1,7.6
          7.4,7
        "
            />
        </svg>
    );
}