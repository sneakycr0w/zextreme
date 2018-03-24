import React from 'react';
import styled from 'react-emotion';
import 'bulma/css/bulma.css'
import Carousel from '../components/Carousel';
import ContactForm from '../components/ContactForm';
import logo from '../assets/logo.png';

const Main = styled('section')`
  height: 100vh;
`;

const Container = styled('div')`
  margin: 5% auto;
`;

const Header = styled('div')`
  height: 10vh;
  margin-bottom: 5%;
`;

const Logo = styled('img')`
  max-width: 100%;
  max-height: 100%;
`;

const Slogan = styled('p')`
  font-style: italic;
  opacity: 0.6;
`;

const imageList = [
  'http://via.placeholder.com/500x500',
  'http://via.placeholder.com/500x500',
  'http://via.placeholder.com/500x500',
  'http://via.placeholder.com/500x500',
  'http://via.placeholder.com/500x500',
  'http://via.placeholder.com/500x500',
]

const App = () => (
  <Main className="section">
    <Header className="container has-text-centered">
      <Logo src={logo} alt="Z Extreme Productions" />
      <Slogan className="subtitle is-4">Professional Scaffolding for your event</Slogan>
    </Header>
    <Container className="container has-text-centered">
      <p className="is-3">This is where we put information about what our business is and stuff. This should probably be like three or four sentences maybe?</p>
    </Container>
    <Container className="hero is-dark is-bold container is-fullhd">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Experience</h1>
          <h2 className="subtitle">We are the best in the business, no need to look at our competition</h2>
        </div>
      </div>
    </Container>
    <Container className="container has-text-centered">
      <Carousel images={imageList} />
    </Container>
    <section className="hero is-light">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  </section>
  </Main>
);

export default App;
