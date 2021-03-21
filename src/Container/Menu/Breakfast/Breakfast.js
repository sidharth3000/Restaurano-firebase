import React, { Component } from 'react';

import './Breakfast.css';
import Navbar from '../../../Component/Navbar/Navbar';
import Card from '../../../Component/Card/Card';
import Footer from '../../../Component/Footer/Footer'

import Coffee from '../../../Assets/coffee.jpg';

class Breakfast extends Component {
    render () {
    
        return(
            <div>
               <Navbar/>

               <div className="menu_cards">
                    <Card name="latte"/>
                    <Card name="coffee"/>
                    <Card name="coffee"/>
                    <Card name="coffee"/>
               </div>

               <Footer/>

            </div>
        ) ;
    }
}



export default Breakfast;