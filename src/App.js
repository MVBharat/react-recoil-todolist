import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <RecoilRoot>      
      <React.Suspense fallback={<div> Loading </div>}>
        <TodoList />
        Hello
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;
