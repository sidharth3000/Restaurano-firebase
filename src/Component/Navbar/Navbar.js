import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../Store/actions/actions';

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
               
                {this.props.isAuth ?
               <NavLink to="/orders" className="navbar_links" exact>
               <div className="orders">Orders</div>
               </NavLink>:
               null}
               
               {/* <NavLink> */}
                <div className="reservation">Reservation</div>
               {/* </NavLink> */}
               
               <NavLink to="/feedback" className="navbar_links" exact>
               <div className="feed">Feedback</div>
               </NavLink>

            {this.props.isAuth ?
                <Link to="/" className="navbar_links" exact>
               <div className="feed" onClick={this.props.onLogoutHandler}>Logout</div>
                </Link>
               
               :
               <Link to="/authenticate" className="navbar_links" exact>
               <div className="feed">Authenticate</div>
                </Link>
}              
            </div>
        ) ;
    }
}

const mapStateToProps = state => {
    return{
        isAuth: state.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogoutHandler: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);