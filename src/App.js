import React from 'react';
import { RecoilRoot } from 'recoil';
import User from './components/User/user';

function App() {
  return (
    <RecoilRoot>      
      <User />
    </RecoilRoot>
  );
}

export default App;
