import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase-Config";
import { createContext } from "react";
// export const AppContext = createContext();
export const focusContext = createContext();

const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [focus, setFocus] = useState(false);
  const [productCartData, setProductCartData] = useState([]);

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
  function incCount(product) {
    const productExist = productCartData.find((item) => item.id === product.id);
    if (productExist) {
      setProductCartData(
        productCartData.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setProductCartData([...productCartData, { ...product, quantity: 1 }]);
    }

    setProductCartData([product]);
    setCount(count + 1);
  }

  function focusOnInput() {
    setFocus(true);
  }
  function focusOutOnInput() {
    setFocus(false);
  }
  return (
    <focusContext.Provider
      value={{
        value: [count, setCount],
        value2: incCount,
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
