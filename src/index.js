import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%'
      }}
    >
      <h1 style={{ color: 'white', alignSelf: 'center' }}>COMING SOON</h1>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
