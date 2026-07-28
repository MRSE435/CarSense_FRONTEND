export default function MetricBar({ label, value, color }) {
    return (
        <div className="flex flex-col gap-2 p-2">
            <div className="flex justify-between text-white">
                <span>{label}</span>
                <span>{value}%</span>
            </div>

            <div className="h-3 w-full rounded-full bg-zinc-700 overflow-hidden">
                <div
                    className="h-full rounded-full"
                    style={{
                        width: `${value}%`,
                        backgroundColor: color,
                    }}
                />
            </div>
        </div>
    );
}