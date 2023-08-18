"use client"

import Run from "@/components/Run/run";
import { testSplits } from "@/testData/testData";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Runs = () => {
  const [loading, setLoading] = useState(true);
  const [runData, setRunData] = useState({});
  
  useEffect(() => {
    //fetch run info from api
    const fetchData = async () => {
      const response = await fetch(`goldsplit/run/details/${run_id}/`, {
        method: 'GET'
        }
      );
        
      if (response.ok) {
        console.log(response.data);
        console.log(response.json);
        setRunData(response.json);
        setLoading(false);
      };
    };

    fetchData().catch(console.error);
  }), []

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