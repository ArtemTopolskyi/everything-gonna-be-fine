import React from 'react';
import { Container } from './Container';
import { Mood, quotes } from './constants';
import './GoodMood.css';

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * (quotes.length))
  console.log(randomIndex);
  return quotes[randomIndex];
};

export const GoodMood = ({ toggleMood }) => (
  <Container mood={Mood.Good} toggleMood={toggleMood}>
    <p className='quote'>
      {getRandomQuote()}
    </p>
  </Container>
);
