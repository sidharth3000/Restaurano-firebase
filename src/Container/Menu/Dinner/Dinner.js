import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import './Dinner.css';
import Navbar from '../../../Component/Navbar/Navbar';
import Card from '../../../Component/Card/Card';
import Footer from '../../../Component/Footer/Footer'
import Modal from '../../../UI/Modal/Modal';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Spinner from '../../../UI/Spinner/Spinner';
import axios from "../../../axios-orders";
import * as actionTypes from '../../../Store/actions';

class Dinner extends Component {

    render () {
    
        return(
            <div>
               <Navbar/>
            
                <Backdrop show={this.props.show} purchseCancel={this.props.onOrderCancelHandler}/>
                <Modal show={this.props.show} >

                    <div className="child_modal">

                        <img className="modal_image" src={'Assets/' + this.props.item_name + '.jpg'}/>
                        
                        <div className="menu_right">
                            <div className="modal_item">{this.props.item_name}</div>
                            <div className="modal_price">&#x20B9;{this.props.price}</div>
                            <div className="modal_desc"> Lorem Ipsum is simply dummy text of the printing and typesetting
                                try. Lorem Ipsum has been the industry's standard dummy text ever since
                                1500s
                            </div>
                            <Link to="/checkout"><div className="modal_continue" >Continue</div></Link>
                            <div className="modal_cancel" onClick={this.props.onOrderCancelHandler}>Cancel</div>
                        </div>

                    </div>     
            
                </Modal>

               <div className="menu">

                <div className="meal_name">Dinner</div>

                <div className="menu_cards">
                        <Card name="Butter_Chicken" cost="600" veg="0"/>
                        <Card name="Butter_Paneer" cost="400" veg="1"/>
                        <Card name="Mushroom_Roast" cost="350" veg="1"/>
                        <Card name="Pulao" cost="180" veg="1"/>
                        <Card name="Roti" cost="150" veg="1"/>
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
        price: state.price,
        show: state.purchasing,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderHandler: (name,price) => dispatch({type: actionTypes.PURCHASE_CONT, name: name, price: price}),
        onOrderCancelHandler: () => dispatch({type: actionTypes.PURCHASE_CANCEL}),

        onCheckoutCont: () => dispatch({type: actionTypes.CHECKOUT_CONT}),
        onCheckoutCancel: () => dispatch({type: actionTypes.CHECKOUT_CANCEL})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dinner);