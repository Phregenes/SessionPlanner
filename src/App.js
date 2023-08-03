import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  function handleCounter() {
    setCount(count + 1);
  }

  function handleCounter1() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={handleCounter}>somar 1</button>
      <button onClick={handleCounter1}>subitrair 1</button>
    </div>
  );
}

export default App;
