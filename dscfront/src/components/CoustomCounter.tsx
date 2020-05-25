import React, { useState } from 'react';

const CoustomCounter = () => {
  const [count, setCount] = useState(0);

  const plusOnClick = () => {
    setCount(count + 1);
  };

  const minusOnClick = () => {
    setCount(count - 1);
  };
  return (
    <div>
      현재 수 : {count} <br />
      <button onClick={plusOnClick}>plus</button>
      <button onClick={minusOnClick}>minus</button>
    </div>
  );
};

export default CoustomCounter;
