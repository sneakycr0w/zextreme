import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const Container = styled('div')`
  background-color: red;
`;

const Header = ({ logo }) => (
  <Container>
    <img src={logo} alt="Logo" />
  </Container>
);

Header.propTypes = {
  logo: PropTypes.string,
};

Header.defaultProps = {
  logo: '',
};

export default Header;
