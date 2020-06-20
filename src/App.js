import React from 'react';
import { RecoilRoot } from 'recoil';
import Counter from './components/Counter/counter';
import User from './components/User/user';
function App() {
  return (
    <RecoilRoot>
      <Counter />
      <User />
    </RecoilRoot>
  );
}

export default App;
