import React, { useEffect, useReducer, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase-Config";
import { createContext } from "react";
import { reducer } from "./reducer";
// export const AppContext = createContext();
export const focusContext = createContext();

const inisialState = {
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [focus, setFocus] = useState(false);
  const [productCartData, setProductCartData] = useState([]);
  const [state, dispatch] = useReducer(reducer, inisialState);
  const { cart } = state;
  const cartCount = state.amount;
  const cartItemTotal = state.total;
  // console.log(state.total, state.amount);

  useEffect(() => {
    dispatch({ type: "GET-TOTAL" });
  }, [state.cart]);

  // --------------------------Authentication code-------------------------------
  const [input, setInput] = useState({ email: "", password: "" });
  const [inputData, setInputData] = useState([]);

  const createAccount = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        input.email,
        input.password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        input.email,
        input.password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputData(input);
    console.log(inputData);
    createAccount();
    logIn();
    setInput({ email: " ", password: " " });
  };

  // localStorage
  // useEffect(() => {
  //   let user = JSON.parse(localStorage.getItem("auth_user"));
  //   console.log("My usrt:", user);
  // }, []);
  // -----------------------------------------------------------------------------

  const getProductDetails = (product) => {
    setProductCartData((prevProduct) => {
      return [...prevProduct, product];
    });
  };

  const productFetched = () => {
    console.log(productCartData);
    dispatch({ type: "PRODUCT-FETCHED", payload: productCartData });
  };
  useEffect(() => {
    productFetched();
    console.log(productCartData);
  }, [productCartData]);

  function focusOnInput() {
    setFocus(true);
  }
  function focusOutOnInput() {
    setFocus(false);
  }
  return (
    <focusContext.Provider
      value={{
        ...state,
        cart,
        cartCount,
        cartItemTotal,
        value: [count, setCount],
        getProductDetails,
        focus,
        focusState: [focus, setFocus],
        focusFn: focusOutOnInput,
        productCartData: productCartData,
        input: [input, setInput],
        handleChange: handleChange,
        handleSubmit: handleSubmit,
      }}
    >
      {children}
    </focusContext.Provider>
  );
};
export { AppProvider };
