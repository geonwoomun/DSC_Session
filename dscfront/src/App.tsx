import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import 'antd/dist/antd.css';

const Container = styled.div`
  background: skyblue;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomInput = styled(Input)`
  width: 400px;
  height: 30px;
`;

function App() {
  return (
    <Container>
      <CustomInput />
    </Container>
  );
}

export default App;
