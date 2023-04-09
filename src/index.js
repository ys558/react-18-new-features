import React from 'react';
import ReactDOM from 'react-dom/client';
import UseTransitionDemo from './UseTransitionDemo';
import StartTransitionClassDemo from './StartTransitionClassDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseTransitionDemo />
    {/* <StartTransitionClassDemo /> */}
  </React.StrictMode>
);
