import React from 'react';
import styled from 'styled-components'


const Nothing = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 4em;
`
const Title = styled.p`
font-size: 2rem;
  font-weight: 900;
  color: #4caf50;
  background-color: #fff;
  box-shadow: .1rem .05rem 0.1rem 0 rgba(0,0,0,0.1);
  border-radius: 0.8rem;
  padding: 0.4rem;
`

const NothingTodo = () => {
  return (
      <Nothing>
        <Title> 아직 오늘 할일은 없네요.</Title>
      </Nothing>
  );
};

export default NothingTodo;
