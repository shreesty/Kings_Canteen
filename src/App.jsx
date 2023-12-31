
import React from 'react'
import Login_Page from './Login-Page'
import WebFont from 'webfontloader';
import Home_Page from './home_page';
import { Routes, Route } from 'react-router-dom';
import Cart_Page from '/src/Cart_Page.jsx';
import Order_Page from './order_page';

WebFont.load({
  google: {
    families: ['Montaga', 'Homemade Apple','Jomolhari','Oswald']
  },
});
function App() {

  return (
    <>

  <Routes>
    
  <Route path="/" element={<Login_Page/>} />
  <Route path="home/shistiiii/Documents/shistii/Kings_Canteen/src/home_page.jsx" element={<Home_Page/>} />
  <Route path="home/shistiiii/Documents/shistii/Kings_Canteen/src/Cart_Page.jsx" element={<Cart_Page/>} />
  <Route path="/home/shistiiii/Documents/shistii/Kings_Canteen/src/order_page.jsx" element={<Order_Page/>} />


  
  </Routes>
    </>


  )
}

export default App
