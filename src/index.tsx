import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function Counter() {
  const [a, setA] = useState(1);
  const arrs = new Array(10000).fill(1);
  return (
    <div>
      <input type="text" value={a} onChange={e => setA(e.target.value)} />
      {arrs.map(x => (
        <div>{a}</div>
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
