import React, { useState } from "react";
import Kings_logo from './Images/kings_logo.png';
import Logout_logo from './Images/log-out.png';
import { Link } from 'react-router-dom';
import Cart_logo from './Images/Cart_icon.png';

function Home_Page() {
  const [currentCategory, setCurrentCategory] = useState("All"); 

  const [Menu] = useState([
    {
      title: 'Chicken Momo',
      Image: '/src/Images/momo.png',
      type: 'non-veg',
    },
    {
      title: 'Veg Momo',
      Image: '/src/Images/veg_momo.png',
      type: 'veg',

    },
    {

      title: 'Cheese toast',
      Image: '/src/Images/Cheese_Toast.png',
      type: 'veg',


    },
    {
      title: 'Chanaa',
      Image: '/src/Images/Channa.png',
      type: 'veg',


    },
    {
      title: 'Aloo Chop',

      Image: '/src/Images/AlooChopImage.png',
      type: 'veg',


    },
    {
      title: 'Veg Pakauda',

      Image: '/src/Images/pakaudaa.png',
      type: 'veg',

    },
    {
      title: 'Chicken Fried Rice',

      Image: '/src/Images/Chicken-Fried-Rice.png',
      type: 'non-veg',



    },
    {
      title: 'Veg Fried Rice',
      Image: '/src/Images/vegfriedrice.png',
      type: 'veg',


    },
    {
      title: 'Chicken Sandwich',
      Image: '/src/Images/shredded-chicken-sandwich-removebg-preview.png',
      type: 'non-veg',

    },
    {
      title: 'Veg Sandwich',
      Image: '/src/Images/Vegetable-Sandwich.png',
      type: 'veg',

    },

    {
      title: 'Veg Chowmin',
      Image: '/src/Images/vegetable-chowmin.png',
      type: 'veg',

    },
    {
      title: 'Chicken Chowmin',
      Image: '/src/Images/chicken-chowmin.png',
      type: 'non-veg',


    },
    {
      title: 'Boil Egg',
      Image: '/src/Images/BoilEgg.png',
      type: 'non-veg',


    },
    {
      title: 'Omlette',
      Image: '/src/Images/omlette.png',
      type: 'non-veg',


    },
    {
      title: 'Mix Fruits',
      Image: '/src/Images/Mix-Fruits.png',
      type: 'veg',


    },
    {
      title: 'Coffee',
      Image: '/src/Images/coffee.png',
      type: 'drinks',


    },
    {
      title: 'Milk Tea',
      Image: '/src/Images/MilkTea.png',
      type: 'drinks',


    },
    {
      title: 'Black Tea',
      Image: '/src/Images/BlackTea.png',
      type: 'drinks',


    },
    {
      title: 'Green Tea',
      Image: '/src/Images/GreenTea.png',
      type: 'drinks',

    },
    {
      title: 'Hot Lemon',
      Image: '/src/Images/Hot_Lemon.png',
      type: 'drinks',

    },
    {
      title: 'Juice',
      Image: '/src/Images/Juice.png',
      type: 'drinks',

    },
  ])

  const [itemCounts, setItemCounts] = useState(Menu.reduce((acc, item) => {
    acc[item.title] = 1; // Initialize each item's count to 1
    return acc;
  }, {}));

  const Increment = (title) => {
    const updatedCounts = { ...itemCounts };
    updatedCounts[title] += 1;
    setItemCounts(updatedCounts);
  }

  const Decrement = (title) => {
    if (itemCounts[title] > 1) {
      const updatedCounts = { ...itemCounts };
      updatedCounts[title] -= 1;
      setItemCounts(updatedCounts);
    }
  }

  const filterMenuByCategory = (category) => {
    if (category === "All") {
      return Menu;
    } else {
      return Menu.filter(item => item.type === category);
    }
  }

  return (
    <>

      <div className="Home_page">

        <div className="Canteen">
          <div className="Kings_Canteen">
            <h1> King's</h1>
            <h1>Canteen</h1>
          </div>
          <div className="Grab_a_bite">
            <h1> <i>grab a</i></h1>
            <h1> <i>bite!</i></h1>
          </div>


        </div>
        <div className="Container">
        <div className="Nav_bar">
          <img src={Kings_logo} height={60} width={40} />
          <div className="All" onClick={() => setCurrentCategory("All")}>All</div>
          <div className="Non-veg" onClick={() => setCurrentCategory("non-veg")}>Non-Veg</div>
          <div className="Veg" onClick={() => setCurrentCategory("veg")}>Veg</div>
          <div className="Drinks" onClick={() => setCurrentCategory("drinks")}>Drinks</div>
          <img className="Cart_icon"src={Cart_logo} height={55}></img>
          <img className="Logout_icon"src={Logout_logo} height={90}></img>

        </div>


        <div className="Menu">
          {filterMenuByCategory(currentCategory).map((All_Menu, i) => (
            <div key={i} className="All_Menu">
              <img src={All_Menu.Image} height={150} width={150} />
              <h1>{All_Menu.title}</h1>
              <div className="items">
                <div className="quant">
                  <div className="btn" onClick={() => Decrement(All_Menu.title)}>-</div>
                  <div>{itemCounts[All_Menu.title]}</div>
                  <div className="btn" onClick={() => Increment(All_Menu.title)}>+</div>
                </div>
                <div className="price">Rs</div>
              </div>
              <button className="Add_to_Cart">
                <ul>
                  <li>
                    <Link to="/home/shistiiii/Documents/shistii/Kings_Canteen/src/Cart_Page.jsx"> 
                    Add to Cart
                    </Link>
                  </li>
                </ul>
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  )
}


export default Home_Page;
