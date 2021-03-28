import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import './Navbar.css'

class Navbar extends Component {
    render () {
    
        return(
            <div className='navbar_container'>
                <div className="navbar_logo">
                    <img className='navbar_img' src={"Assets/logo.png"} alt="logo" />
                    
                </div>
                <div className='navbar_name'>RESTURANO</div>
                <NavLink to="/" exact>
                    <div className="home navbar_links">Home</div>
                </NavLink>
               
               <NavLink to="/orders" className="navbar_links" exact>
               <div className="orders">Orders</div>
               </NavLink>
               
               {/* <NavLink> */}
                <div className="reservation">Reservation</div>
               {/* </NavLink> */}
               
               <NavLink to="/feedback" className="navbar_links" exact>
               <div className="feed">Feedback</div>
               </NavLink>

               <NavLink to="/authenticate" className="navbar_links" exact>
               <div className="feed">Authenticate</div>
               </NavLink>
               
            </div>
        ) ;
    }
}



export default Navbar;