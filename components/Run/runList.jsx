import { useRouter } from "next/navigation";

import { msToTime } from "@/utils/time";

const RunList = ({ runs }) => {
    const router = useRouter();

    const handleClick = (event) => {
        router.push(`/runs/${event.currentTarget.id}/`);
    };

    return (
        <div className="flex flex-col space-y-2 p-2 justify-center items-center">
            {runs.results.map((run) => (
                <button id={run.id} onClick={handleClick}>
                    <div className="border border-yellow-500 p-2">
                        <div className="text-white">{run.game_name}</div>
                        <div className="text-white">{run.category_name}</div>
                        <div className="text-white">{msToTime(run.time)}</div>
                        <div className="text-white">By Semirare</div>
                    </div>
                </button>
            ))};
        </div>
    )
}

export default RunList;