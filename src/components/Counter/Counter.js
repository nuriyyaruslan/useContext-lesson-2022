import { Container } from '@mui/material';
import React, { useContext } from 'react';
import { myCounterContext } from '../../contexts/CounterContext';
import styled from 'styled-components';

const Counter = () => {
    const { count, incrementFunc, decrementFunc,activeColor } = useContext(myCounterContext);

    const Button = styled.button`
        height:48px;
        border:2px solid #000;
        color: #000;;
        background:#f5f5f5;
        padding-left:20px;
        padding-right:20px;
    `

    const Title = styled.h1`
        background:${ props => props.active ? `${activeColor.background}` : '#000'};
        color:${ props => props.active ? `${activeColor.color}` : 'red'};
    `

    return(
        <Container maxWidth="lg">
            <Button type='button' onClick={decrementFunc}>decrement</Button>
            <Title active>{count}</Title>
            <Button type="button" onClick={incrementFunc}>increment</Button>
        </Container>
    )
}

export default Counter;