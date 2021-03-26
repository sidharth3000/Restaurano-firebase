import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import './Breakfast.css';
import Navbar from '../../../Component/Navbar/Navbar';
import Card from '../../../Component/Card/Card';
import Footer from '../../../Component/Footer/Footer'
import Modal from '../../../UI/Modal/Modal';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Spinner from '../../../UI/Spinner/Spinner';
import axios from "../../../axios-orders";
import * as actionTypes from '../../../Store/actions';

class Breakfast extends Component {

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
                            <div className="modal_price">{this.props.price}</div>

                            <Link to="/checkout"><div className="modal_continue" >Continue</div></Link>
                            <div className="modal_cancel" onClick={this.props.onOrderCancelHandler}>Cancel</div>
                        </div>

                    </div>     
            
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

export default connect(mapStateToProps, mapDispatchToProps)(Breakfast);