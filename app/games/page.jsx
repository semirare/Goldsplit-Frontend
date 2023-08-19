"use client";

import { useState, useEffect } from "react";

import GameList from "@/components/Game/gameList";

const Games = () => {
  const [games, setGames] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //fetch runs from api
    const fetchData = async () => {
      const response = await fetch(`/goldsplit/games/`, {
        method: 'GET'
        }
      );
        
      if (response.ok) {
        const data = await response.json()
        setGames(data);
        setLoading(false);
      };
    };

    fetchData().catch(console.error);
  }, []);

  return (
    loading ? (
      <div>Loading in Progress</div>
    ) : (
      <div className="flex items-center justify-center">
        <GameList games={games}/>
      </div>
    )
  );
};

export default Games;