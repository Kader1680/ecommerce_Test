// components/Counter.js

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    alert("fff");
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={decrement} style={{ marginRight: '10px' }}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
