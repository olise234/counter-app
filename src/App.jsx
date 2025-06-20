import { useState } from 'react';
import NameInput from './NameInput';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const increase = () => {
    if (count < 50) {
      setCount(count + 1);
      setMessage(''); // Clear message if within range
    } else {
      setMessage('You have reached the maximum limit');
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage(''); // Clear message if within range
    } else {
      setMessage('You have reached the minimum limit');
    }
  };

  return (
    <div className="app">
      <div className="card">
        <NameInput />
        <div className="circle">
          <span className="counter-value">{count}</span>
        </div>
        {message && <p className="limit-message">{message}</p>}
        <div className="buttons">
          <button onClick={increase} className="btn btn-increase">Increase</button>
          <button onClick={decrease} className="btn btn-decrease">Decrease</button>
        </div>
      </div>
    </div>
  );
}

export default App;
