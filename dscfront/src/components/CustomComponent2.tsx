import React, { useState, useEffect } from 'react';

const CustomComponent2 = () => {
  const [stateName, setStateName] = useState('표석훈');
  const [stateAge, setStateAge] = useState(24);

  useEffect(() => {
    setInterval(() => {
      setStateName((prev) => (prev === '표석훈' ? '길현빈' : '표석훈'));
    }, 3000);
    return () => {
      clearInterval();
    };
  }, []);
  return (
    <div>
      {stateName} {stateAge}
    </div>
  );
};

export default CustomComponent2;
