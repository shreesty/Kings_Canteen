import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login-Page.css";
import close_icon from "./Images/close.png"
import back_button from "./Images/back_button.png"

function Cart_Page() {
  const [itemCounts, setItemCounts] = useState({ "Chi Momo": 1, "Veg Momo": 1,
  "Alo Chop": 1, });

  const Increment = (title) => {
    const updatedCounts = { ...itemCounts };
    updatedCounts[title] += 1;
    setItemCounts(updatedCounts);
  };

  const Decrement = (title) => {
    if (itemCounts[title] > 1) {
      const updatedCounts = { ...itemCounts };
      updatedCounts[title] -= 1;
      setItemCounts(updatedCounts);
    }
  };

  const items = [
    {
      title: "Chi Momo",
      Image: '/src/Images/momo.png',
      price: "RS 150",
      quantity: itemCounts["Chicken Momo"],
      total: "RS " + itemCounts["Chi Momo"] * 150,
    },
    {
      title: "Veg Momo",
      Image: '/src/Images/veg_momo.png',
      price: "RS 160",
      quantity: itemCounts["Veg Momo"],
      total: "RS " + itemCounts["Veg Momo"] * 160,
    },
    {
      title: "Alo Chop",
      Image: '/src/Images/AlooChopImage.png',
      price: "RS 25",
      quantity: itemCounts["Veg Momo"],
      total: "RS " + itemCounts["Alo Chop"] * 25,
    },

  ];
  
  const grandTotal = items.reduce((acc, item) => acc + parseFloat(item.total.split(" ")[1]), 0);
  return (
    <>
      <div className="Cart_Page">
      <ul>
              <li>
                <Link to="/home/shistiiii/Documents/shistii/Kings_Canteen/src/home_page.jsx"><img  className="Back_button"src={back_button} height={40}></img>
</Link>
              </li>
            </ul>

        <div className="Cart_Nav">
          <h1>Your Cart</h1>
        </div>
        <div className="Cart_container">
          <div className="Items_headers">
            <h4 className="Item_header">Items</h4>
            <h4 className="Price_header">Price</h4>
            <h4 className="Quantity_header">Quantity</h4>
            <h4 className="Total_header">Total</h4>
          </div>
          <div className="Item_component">
            {items.map((item, index) => (
              <div className="items" key={index}>
                <img src={item.Image} height={120} alt="item-image" />
                <h4 className="item_title">{item.title}</h4>
                <h3 className="item_price">{item.price}</h3>
                <div className="quant">
                  <div className="btn" onClick={() => Decrement(item.title)}>-</div>
                  <div className="quantity">{itemCounts[item.title]}</div> 
                  <div className="btn" onClick={() => Increment(item.title)}>+</div>
                </div>
                <h3 className="Total">{item.total}</h3>
                <img className="Close_button"src={close_icon} height={25}></img>

              </div>
            ))}
          </div>

          <h1 className="Grand_total">Grand Total = Rs {grandTotal.toFixed(2)}</h1>
        </div>
        <div className="Order_Now">
              <button>Order Now</button>
              </div>
      </div>
    </>
  );
}

export default Cart_Page;
