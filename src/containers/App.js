import React from 'react';
import styled from 'react-emotion';
import Header from '../components/Header/Header';

const Container = styled('div')`
  max-width: 945px;
`;

const App = () => (
  <Container>
    <Header text="Z Extreme Productions" />
    <p>This website is currently under construction</p>
  </Container>
);

export default App;
