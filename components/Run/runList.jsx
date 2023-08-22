"use client";

import { useState, useEffect } from "react";
import * as Tabs from '@radix-ui/react-tabs';

import RunCard from "./runCard";
import Loader from "../Loader/loader";

const RunList = ({game_id=null }) => {
    const [loading, setLoading] = useState(true);
    const [runData, setRunData] = useState({});
    const [categories, setCategories] = useState(new Set());
    
    useEffect(() => {
      //fetch run data from api
      //all runs in db are returned if all_runs are true
      //if all_runs is false, a game_id should be provided to fetch the runs assocaited with that game
      const fetchData = async () => {
        const response = await fetch(`/goldsplit/games/${game_id}/`, { method: 'GET' });
          
        if (response.ok) {
          const data = await response.json()
          let categories = new Set();
          data.runs.forEach((run) => {
            categories.add(run.category_name);
          }) 
          setRunData(data.runs);
          setCategories(categories);
          setLoading(false);
        };
      };
  
      fetchData().catch(console.error);
    }, []);

    return (
        loading ? (
            <Loader/>
        ) : (
            <div className="flex flex-col space-y-2 p-2 justify-center items-center">
              <Tabs.Root defaultValue="All Runs" className="flex flex-col">
                  <Tabs.List aria-label="Category tabs" className="flex justify-between">
                    <Tabs.Trigger value="All Runs">All Runs</Tabs.Trigger>
                    {Array.from(categories).map((category) => (
                      <Tabs.Trigger value={category}>{category}</Tabs.Trigger>
                    ))}
                  </Tabs.List>
                  <Tabs.Content value="All Runs">
                    {runData.map((run) => (
                      <RunCard run={run}/>
                    ))}
                  </Tabs.Content>
                  {Array.from(categories).map((category) => (
                      <Tabs.Content value={category}>
                        {runData.map((run) => {
                          if (run.category_name === category) {
                            return <RunCard run={run}/>
                          }
                        })}
                      </Tabs.Content>
                  ))}
              </Tabs.Root>
            </div>
        )
    )
}

export default RunList;