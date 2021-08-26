import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function Counter() {
  const [a, setA] = useState(1);
  const handleClick = () => {
    setA(a => a + 1);
  };
  return (
    <div>
      <span>{a}</span>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
