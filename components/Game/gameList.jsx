"use client";

import { useState, useEffect } from "react";

import { Grid } from "@radix-ui/themes";

import GameCard from "./gameCard";

const gameList = () => {
    const [games, setGames] = useState();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      //fetch games from api
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
            <div>Loading in progress</div>
        ) : (
            <Grid columns='3' p='5' gap='5' width='auto'>
                {games.map(game => (
                    <GameCard game={game}/>
                ))}
            </Grid>
        )
    )
}

export default gameList;