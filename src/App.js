import React from 'react';
import { AppContextProvider } from './context/AppContext';
import AppComponent from './components/useEffectComponent/useEffectComponent';
import HookCounterOne from './components/HookCounter/HookCounterOne';

function App() {
  return (
    <AppContextProvider>
      {/* <AppComponent /> */}
      <HookCounterOne />
    </AppContextProvider>
  );
}

export default App;
