import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./shared/constants";
import { PageWrapper } from "./PageWrapper";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [focus, setFocus] = useState(false);
  const [productCartData, setProductCartData] = useState([]);
  function incCount(product) {
    const productExist = productCartData.find((item) => item.id === product.id);
    console.log(productExist);
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
    <BrowserRouter>
      <PageWrapper
        liftState={count}
        focus={focus}
        focusLiftState={focusOnInput}
      >
        <Routes>
          {ROUTES.map(({ routeName, Component }) => {
            return (
              <Route
                key={routeName}
                path={routeName}
                element={
                  <Component
                    ls={incCount}
                    focusOut={focusOutOnInput}
                    productCartData={productCartData}
                  />
                }
              ></Route>
            );
          })}
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  );
}
