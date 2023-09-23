import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login-Page.css';
import login from './Images/login.png';
import { Link } from 'react-router-dom';
// import Hide_Password from './Images/hide.png';
// import Show_Password from './Images/show.png';



function Login_Page() {
  const navigate = useNavigate()
  const [input, setInput] = useState(
    {
      Name: '',
      ID: '',
    }
  )
  //Storing the Values in local Storage
    const handleLogin = (e)=>
    {
      e.preventDefault();
      const logged_user = localStorage.setItem("user", JSON.stringify(input))
      navigate('/')
    }

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
          <form>
            <input
              name='Name'
              type="text"
              value={input.Name}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }

              className="Input" placeholder="Name" />
            <input
              name='ID'
              type="text"
              value={input.ID}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }

              className="Input" placeholder="ID Number" />
          </form>
          <div onClick={handleLogin} className="Login-button">
            Login
          </div>

        </div>

      </div>

    </>
  )
}

export default Login_Page;



