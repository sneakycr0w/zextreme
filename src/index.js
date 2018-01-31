import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';

import App from './App';

injectGlobal`
  * {
    font-family: 'Work Sans', sans-serif;
  }
  @font-face {
    src: url('https://fonts.googleapis.com/css?family=Space+Mono|Work+Sans');
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
