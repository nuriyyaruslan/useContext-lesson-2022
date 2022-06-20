import React, { useContext } from 'react';
import { Container } from '@mui/material';
import { myCounterContext } from '../../contexts/CounterContext';
import './About.scss';

function About() {
  const { count } = useContext(myCounterContext);

  return (
    <Container maxWidth="lg" className='about-page'>
      <h2>About <strong>{count}</strong></h2>
    </Container>
  )
}

export default About