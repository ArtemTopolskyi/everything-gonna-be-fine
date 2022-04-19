import React, { useCallback, useState } from 'react';
import { BadMood } from './BadMood';
import { GoodMood } from './GoodMood';
import { Mood } from './constants';
import './App.css';

const App = () => {
  const [mood, setMood] = useState(Mood.Bad);

  const isBad = mood === Mood.Bad;

  const toggleMood = useCallback(() => {
    if (isBad) {
      setMood(Mood.Good);
    } else {
      setMood(Mood.Bad);
    }
  }, [isBad])

  return (
    <>
      {isBad
        ? <BadMood toggleMood={toggleMood} />
        : <GoodMood toggleMood={toggleMood} />}
    </>
  );
};

export default App;
