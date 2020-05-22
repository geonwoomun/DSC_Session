import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoList from './todo/TodoList';

// const countState = atom({
//   key: 'countState',
//   default: 0,
// });

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

// function Counter() {
//   const [count, setCount] = useRecoilState(countState);

//   const addCount = (e) => {
//     setCount(count + 1);
//   };

//   const subCount = (e) => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <button onClick={addCount}>up</button>
//       <button onClick={subCount}>sub</button>
//       <p>{count}</p>
//     </div>
//   );
// }

export default App;
