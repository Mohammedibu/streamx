import React, { Children, useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/netflix_react_assets/assets/cards/streamlogo.png';
import search_icon from "../../assets/netflix_react_assets/assets/search_icon.svg";
import bell_icon from "../../assets/netflix_react_assets/assets/bell_icon.svg";
import caret_icon from "../../assets/netflix_react_assets/assets/caret_icon.svg";



const Navbar = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100){
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
}, []);

  return (
    <div className={`navbar ${show && "nav__black"}`}>
       <div className="navbar-left">
       <img src={logo} alt='' className='logoset'/>
       {/* <ul>
        <li>Home</li>
        <li> TV Shows </li>
        <li>Movies</li>
        <li>My List</li>
        
       </ul> */}

       </div>
      
  
       <div className="navbar-right">
        <div className="lan">
        <p> Language</p>
        <img src={ caret_icon} alt="" />

        </div>
       <img src={search_icon} alt="" className='icons' />
       <p className='p'>Kids</p>
       
       <img src={ bell_icon } alt="" className='icons' />
       
       <p className='sign'>SignOut</p>
      
     </div>
     </div>
  )
}

export default Navbar

