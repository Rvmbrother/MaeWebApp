import React, { createContext, useState, useEffect } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [homeBtnScrollPosition, setHomeBtnScrollPosition] = useState(0);

  // Provide other states if needed
  const contextValue = {
    homeBtnScrollPosition,
    setHomeBtnScrollPosition,
  };

  // useEffect(() => {
  //   console.log("homeBtnScrollPosition:", homeBtnScrollPosition);
  // }, [homeBtnScrollPosition]);

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};
