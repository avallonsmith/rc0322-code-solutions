import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton() {
  return <button>Click Me!</button>;
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton />);
