import React from "react";
import './Login-Page.css'
import login from './Images/login.png'
import { Link } from 'react-router-dom';


function Login_Page() {
  return (
    <>

      <div className="Login_Page">
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

        <div className="Input_Container">
          <div className="Homepage_link">
            <ul>
              <li>
                <Link to="/home/shistiiii/Documents/shistii/Kings_Canteen/src/home_page.jsx"> <h2>Home </h2></Link>
              </li>
            </ul>

          </div>
          <img src={login} />
          <input className="Input" placeholder="Name" />
          <input className="Input" placeholder="ID Number" />
          <div className="Login-button">
            Login
          </div>

        </div>

      </div>

    </>
  )
}

export default Login_Page;



