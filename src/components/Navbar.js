import React from 'react'
import { useStateValue } from '../StateProvider';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

function Navbar () {

    const [{ basket, user }, dispatch] = useStateValue()
    const navigate = useNavigate()
    const signOut = () => {
      dispatch({
        type: "SET_USER",
        user: null,
      });
  
      localStorage.removeItem("user");
      navigate("/");
    };
  return (
    <section>
      <div className="inner"> 
        <div className="logo" onClick={() => navigate("/")}>
          <img src="./amazon_logo1.png" alt="" />
        </div>
        <div className="searchbar">
          <input type="text" placeholder="Search..." />
          <div className="searchicon" onClick={() => navigate("/addproduct")}>
            <img src="./searchIcon.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="navbutton"
            onClick={user ? () => signOut() : () => navigate("/login")}
          >
            <p>Hello,</p>
            <p>{user ? user?.fullName : "Guest"}</p>
          </div>
          <div className="navbutton" onClick={() => navigate("/orders")}>
            <p>Return</p>
            <p>& Orders</p>
          </div>
          <div className="basketbutton" onClick={() => navigate("/checkout")}>
            <img src="./basket-icon.png" alt="" />
            <p>{basket?.length}</p>
          </div>
        </div>
      </div>
      <div className="mobilesearchbar">
        <input type="text" placeholder="Search..." />
        <div className="searchicon" onClick={() => navigate("/addproduct")}>
          <img src="./searchIcon.png" alt="" />
        </div>
      </div>
    </section>
  )
}



export default Navbar
