import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Breakfast.css';
import Navbar from '../../../Component/Navbar/Navbar';
import Card from '../../../Component/Card/Card';
import Footer from '../../../Component/Footer/Footer'
import Modal from '../../../UI/Modal/Modal'

class Breakfast extends Component {

    render () {
    
        return(
            <div>
               <Navbar/>
            
               <Modal>
                    <div>{this.props.item_name}</div>
                    <div>{this.props.price}</div>
               </Modal>

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

const mapStateToProps = state => {
    return{
        item_name: state.name,
        price: state.price
    }
}



export default connect(mapStateToProps)(Breakfast);