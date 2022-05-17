import React from 'react';
import ReactDOM from 'react-dom/client';

const react = React.createElement(
  'h1',
  null,
  'Hello, React'
);
console.log('React:', react);

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);
root.render(react);
