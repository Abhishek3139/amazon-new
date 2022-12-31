import { useContext, useEffect } from "react";
import { useState } from "react";
import TreandingList from "../TreandingList/TreandingList";
import { focusContext } from "../../context";
import "./ShoppingCart.css";
export default function ShoppingCart(props) {
  const [cartData, setCartData] = useState([]);
  const { productCartData } = useContext(focusContext);
  useEffect(() => {
    return productCartData ? setCartData(productCartData[0]) : null;
  }, []);
  return (
    <>
      <TreandingList />
      <div className="cart_Main_Container" onClick={props.focusOut}>
        <div className="shopping_Cart">
          <h1>Shopping Cart</h1>
          <span id="price_Text">Price</span>
          <br />
          <hr />
          <div className="item_Cart_Data">
            <div>
              <img src={cartData.img} style={{ width: "180px" }} />
            </div>
            <div style={{ width: "615px" }}>
              <span id="item_Heading">{cartData.heading}</span>
              <br />
              <a href="#" id="cart_Links">
                In stock
              </a>
              <br />
              <span id="cart_Small_Text">
                Sold By
                <a href="#" id="cart_Links">
                  NHAM Apparels
                </a>
              </span>
              <br />
              <span id="cart_Small_Text">
                Gift options not available.
                <a href="#" id="cart_Links">
                  Learn more
                </a>
              </span>
              <br />
              <span id="cart_Small_Text">Size: S</span>
              <br />
              <span id="cart_Small_Text">Color: Black</span>
              <br />
              <select className="shop_cart">
                <option>Qty: 1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>

            <div>
              <span id="item_Rate">
                {cartData.rupee}
                {cartData.item_Price}.00
              </span>
            </div>
            <br />
          </div>
          <hr />
        </div>
        <div className="cart_Sub_Total">
          <h4>
            Subtotal (1 item):{cartData.rupee}
            {cartData.item_Price}.00
          </h4>
        </div>
      </div>
    </>
  );
}
