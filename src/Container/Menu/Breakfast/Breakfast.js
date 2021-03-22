import React, { Component } from 'react';

import './Breakfast.css';
import Navbar from '../../../Component/Navbar/Navbar';
import Card from '../../../Component/Card/Card';
import Footer from '../../../Component/Footer/Footer'

class Breakfast extends Component {

    render () {
    
        return(
            <div>
               <Navbar/>

               <div className="menu">

                <div className="meal_name">~Breakfast~</div>

                <div className="menu_cards">
                        <Card name="coffee"/>
                        <Card name="omelete"/>
                        <Card name="coffee"/>
                        <Card name="coffee"/>
                </div>

               </div>

        

               <Footer/>

            </div>
        ) ;
    }
}



export default Breakfast;