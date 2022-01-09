import React, { useState } from 'react';

const Add = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h1>useState</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>按钮</button>
    </div>
  );
};

export default Add;
