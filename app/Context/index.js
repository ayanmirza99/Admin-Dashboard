"use client";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
