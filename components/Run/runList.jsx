import { useState, useEffect } from "react";

import RunCard from "./runCard";

const RunList = ({ all_runs=true, game_id=null }) => {
    const [loading, setLoading] = useState(true);
    const [runData, setRunData] = useState({});
    
    useEffect(() => {
      //fetch run data from api
      //all runs in db are returned if all_runs are true
      //if all_runs is false, a game_id should be provided to fetch the runs assocaited with that game
      const fetchData = async () => {
        const fetchUrl = all_runs ? '/goldsplit/runs/' : `/goldsplit/games/${game_id}/`
        const response = await fetch(fetchUrl, { method: 'GET' });
          
        if (response.ok) {
          const data = await response.json()
          all_runs ? setRunData(data) : setRunData(data.runs);
          setLoading(false);
        };
      };
  
      fetchData().catch(console.error);
    }, []);
  
    return (
        loading ? (
            <div>Loading in progress</div>
        ) : (
            <div className="flex flex-col space-y-2 p-2 justify-center items-center">
                {runData.map((run) => (
                    <RunCard run={run}/>
                ))}
            </div>
        )
    )
}

export default RunList;