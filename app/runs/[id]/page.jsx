"use client"

import Run from "@/components/Run/run";
import { testSplits } from "@/testData/testData";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Runs = ({ params }) => {
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
  
export default Runs;