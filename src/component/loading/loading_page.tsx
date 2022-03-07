import React from 'react';
import styled from 'styled-components';

export const Loading_page = () => {
  return (
    <Container>
      <h2>Loading. . . </h2>
    </Container>
  )
}

const Container = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height:90vh;
width:100%;
`
