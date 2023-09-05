import React from "react";
function Menu() {

    return (
        <>

            <div key={i} className="All_Menu">

                <img src={All_Menu.Image} height={150} width={150} />

                <h1>{All_Menu.title}</h1>

                <div className="items">
                    <div className="quant">

                        <div className="btn" onClick={Decrement}>-</div>
                        <div>{count}</div>


                        <div className="btn" onClick={Increment}>+</div>
                    </div>
                    <div className="price">Rs</div>
                </div>

                <button className="Add_to_Cart">
                    <ul>
                        <li>
                            <Link to="/home/shistiiii/Documents/shistii/Kings_Canteen/src/Cart_Page.jsx"> Add to Cart</Link>
                        </li>
                    </ul>
                </button>



            </div>

        </>
    )



}

export default Menu;
