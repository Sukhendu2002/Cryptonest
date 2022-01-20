import React, { createContext, useContext, useState, useEffect } from "react";

const Crypto = createContext();

function Context({ children }) {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider
      value={{ currency, setCurrency, symbol }}
    >
      {children}
    </Crypto.Provider>
  );
}

export default Context;

export const CryptoState = () => {
  return useContext(Crypto);
};
