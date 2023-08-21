"use client"

import Run from "@/components/Run/run";
import React, { useEffect, useState } from "react";

const RunDetails = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [runData, setRunData] = useState({});
  
  useEffect(() => {
    //fetch run info from api
    const fetchData = async () => {
      const response = await fetch(`/goldsplit/run/details/${params.id}/`, {
        method: 'GET'
        }
      );
        
      if (response.ok) {
        const data = await response.json()
        setRunData(data);
        setLoading(false);
      };
    };

    fetchData().catch(console.error);
  }, []);

  return (
    loading ? (
      <div>Loading in Progress</div>
    ) : (
      <Run
        gameName={runData.game_name}
        categoryName={runData.category_name}
        totalTime={runData.total_time}
        runner={'Semirare'}
        splits={runData.splits}
      />
    )
  );
};
  
export default RunDetails;