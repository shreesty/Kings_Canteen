
import React from 'react'
import Login_Page from './Login-Page'
import WebFont from 'webfontloader';
import Home_Page from './home_page';
import { Routes, Route } from 'react-router-dom';
import Cart_Page from './Cart_Page';


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

  </Routes>
  {/* <Cart_Page></Cart_Page> */}
    </>


  )
}

export default App
