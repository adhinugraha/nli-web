'use client'
import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';

interface AppContextType {
  // loggedIn: boolean;
  // setLoggedIn: (loggedIn: boolean) => void;
}

const AppContext = createContext<AppContextType | null>(null);

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  // const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const value = useMemo(() => ({ 
    // loggedIn,
    // setLoggedIn,
  }), [
    // loggedIn,
    // setLoggedIn,
  ]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('Trying to access AppContext out of the Provider');
  }

  return context;
};

export { AppContextProvider, useAppContext };