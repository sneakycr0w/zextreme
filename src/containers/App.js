import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'react-emotion';
import logo from '../assets/logo.png';

const Footer = styled('div')`
  height: 10vh;
`;

const Body = styled('div')`
  min-height: 80vh;
`;

const Header = styled(Row)`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 10px;
`

const Logo = styled('img')`
  width: 50%;
  height: auto;
`

const App = () => (
  <Grid>
    <Header>
      <Logo src={logo} alt=""/>
    </Header>
    <Body>
      <Row>
        <Col md={4}><i className="fas fa-users fa-9x"></i></Col>
        <Col md={4}><i className="fas fa-book fa-9x"></i></Col>
        <Col md={4}><i className="fab fa-accessible-icon fa-9x"></i></Col>
      </Row>
    </Body>
    <Footer>
      <p>Footer placeholder</p>
    </Footer>
  </Grid>
);

export default App;
