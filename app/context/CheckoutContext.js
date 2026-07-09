"use client";

import { createContext, useContext, useState } from "react";

const CheckoutContext = createContext();

export function CheckoutProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [userData, setUserData] = useState({});
  const [checkout, setCheckout] = useState({
  user: {},
  product: null,
  payment: null,
});

  const value = {
    selectedProduct,
    setSelectedProduct,

    selectedPayment,
    setSelectedPayment,

    checkout,
    setCheckout,

    userData,
    setUserData,
  };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);

  if (!context) {
    throw new Error(
      "useCheckout harus digunakan di dalam CheckoutProvider"
    );
  }

  return context;
}