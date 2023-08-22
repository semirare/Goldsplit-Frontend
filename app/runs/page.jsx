"use client"

import React, { useEffect, useState } from "react";

import RunList from "@/components/Run/runList";
import Loader from "@/components/Loader/loader";

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
      <Loader/>
    ) : (
      <RunList runs={runs.results}/>
    )
  );
  };
  
export default Runs;