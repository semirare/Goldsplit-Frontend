"use client"

import React, { useEffect, useState } from "react";

import RunList from "@/components/Run/runList";

const Runs = () => {
  const [runs, setRuns] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //fetch runs from api
    const fetchData = async () => {
      const response = await fetch(`/goldsplit/runs/`, {
        method: 'GET'
        }
      );
        
      if (response.ok) {
        const data = await response.json()
        setRuns(data);
        setLoading(false);
      };
    };

    fetchData().catch(console.error);
  }, []);

  return (
    loading ? (
      <div>Loading in Progress</div>
    ) : (
      <RunList runs={runs.results}/>
    )
  );
  };
  
export default Runs;