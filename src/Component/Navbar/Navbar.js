import React, { Component } from 'react';

// import Logo from '../../Assets/logo.png'
import './Navbar.css'

class Navbar extends Component {
    render () {
    
        return(
            <div className='navbar_container'>
                <div className="navbar_logo">
                    <img className='navbar_img' src={"Assets/logo.png"} alt="logo" />
                    
                </div>
                <div className='navbar_name'>RESTURANO</div>
               <div className="home">Home</div>
               <div className="orders">Orders</div>
               <div className="reservation">Reservation</div>
               <div className="feed">Feedback</div>
            </div>
        ) ;
    }
}



export default Navbar;