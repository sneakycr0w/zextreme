import React from 'react';
import styled from 'react-emotion';
import Header from './components/containers/Header/Header';

const Container = styled('div')`
  width: 500px;
`;

const App = () => (
  <Container>
    <Header />
  </Container>
);

export default App;
