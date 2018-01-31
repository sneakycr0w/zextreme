import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const Container = styled('div')`
  h1 {
    font-family: 'Space Mono', monospace;
  }
`;

const Header = ({ logo, text }) => (
  <Container>
    {logo && <img src={logo} alt="Logo" />}
    {text && <h1>{text}</h1>}
  </Container>
);

Header.propTypes = {
  logo: PropTypes.string,
  text: PropTypes.string,
};

Header.defaultProps = {
  logo: '',
  text: '',
};

export default Header;
