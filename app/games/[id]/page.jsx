"use client";

import { Button, Flex } from '@radix-ui/themes';

import RunList from "@/components/Run/runList";
import { useState } from 'react';

const GameDetails = ({ params }) => {
  const [sortMode, setSortMode] = useState('Fastest');

  const onSortClick = () => {
    sortMode === 'Fastest' ? setSortMode('Most Recent') : setSortMode('Fastest');
  }

  return (
    <Flex direction='column'>
      <RunList game_id={params.id} sortMode={sortMode}/>
      <Flex justify='center'>
        <Button onClick={onSortClick} className='w-1/3'>{sortMode}</Button>
      </Flex>
    </Flex>
  );
};
  
export default GameDetails;