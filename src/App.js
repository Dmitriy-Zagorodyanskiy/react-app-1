import React, { useState } from 'react';
import './styles/App.css';

function App() {
  const [value, setValue] = useState('TEXT IN INPUT');

  return (
    <div className="App">
      <div className='post'>
        <div className='post__content'>
          <strong> 1. JS </strong>
          <div>
            JS JS JS
          </div>
        </div>
        <div className='post__btns'>
          <button> Delete button </button>
        </div>
      </div>
    </div>
  );
}

export default App;
