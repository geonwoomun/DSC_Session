import React from 'react';

interface IProps {
  name: string;
  age: number;
}
const CustomComponent = ({ name, age }: IProps) => {
  return (
    <div>
      {name} {age}
    </div>
  );
};

export default CustomComponent;
