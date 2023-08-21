"use client"

import GameList from "@/components/Game/gameList";
import RunList from "@/components/Run/runList";
import React, { useEffect, useState } from "react";

const GameDetails = ({ params }) => {
  return (
    <RunList all_runs={false} game_id={params.id}/>
  );
};
  
export default GameDetails;