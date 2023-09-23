import React from "react";
import { Link } from "react-router-dom";
import back_button from "./Images/back_button.png"

function Order_Page() {
  const itemCounts = {
    "Veg Momo": 1,
    "Chi Momo": 1,
    "Alo Chop": 1,
  };
  const items = [
    {
      title: "Chi Momo",
      quantity: itemCounts["Chicken Momo"],
      total: "RS " + itemCounts["Chi Momo"] * 150,
      status: "In_Progress",
    },
    {
      title: "Veg Momo",
      quantity: itemCounts["Veg Momo"],
      total: "RS " + itemCounts["Veg Momo"] * 120,
      status: "In_Progress"
    },
    {
      title: "Alo Chop",
      quantity: itemCounts["Alo Chop"],
      total: "RS " + itemCounts["Alo Chop"] * 25,
      status: "In_Progress",
    },
    
  ];

  const grandTotal = items.reduce(
    (acc, item) => acc + parseFloat(item.total.split(" ")[1]),
    0
  );

  return (
    <>

      <div className="Order_Page">
      <ul>
          <li>
            <Link to="/home/shistiiii/Documents/shistii/Kings_Canteen/src/Cart_Page.jsx"><img className="Back_button" src={back_button} height={40}></img>
            </Link>
          </li>
        </ul>
        <div className="Orders">

        <h1 style={{textAlign: 'center'}}> Your Order:</h1>
        <div className="Order_container">
          <div className="Order_item__headers">
            <h4 className="Order_Item_header">Items</h4>
            <h4 className="Order_Quantity_header">Quantity</h4>
            <h4 className="Order_Total_header">Total</h4>
            <h4 className="Order_Status_header"> Status</h4>
          </div>
          <div className="Order_Item_component">
            {items.map((item, index) => (
              <div className="Order_items" key={index}>
                <h4 className="Order_item_title">{item.title}</h4>
                  <h4 className="Order_quantity">{itemCounts[item.title]}</h4>
                <h4 className="Order_Total">{item.total}</h4>
                <h4 className="Order_Status">{item.status}</h4>


              </div>
            ))}
          </div>
          </div>
        <h2 style={{textAlign:"center"}}className="grand_total">Grand Total: RS {grandTotal}</h2>
      </div>
      </div>

    </>
  );
}

export default Order_Page;
