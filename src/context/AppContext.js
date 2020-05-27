import React, { createContext, useState } from 'react';

const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Jane Doe',
    age: 20,
  });
  const incrementAge = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: user.age + 1,
    }));
  };
  const decrementAge = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: user.age - 1,
    }));
  };

  return (
    <AppContext.Provider value={{ user, incrementAge, decrementAge }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
