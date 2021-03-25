import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from "../../axios-orders";

import './Checkout.css';
import Modal from '../../UI/Modal/Modal';
import * as actionTypes from '../../Store/actions';

class Checkout extends Component {

    state={
        loading:false
    }

    purchaseContinueHandler = () => {
        this.setState({loading: true});
        const order = {
            item: "coffee"
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

   

    render () {
        console.log(this.props.checkout);
        return(
            <div>
                <Modal show={this.props.checkout} >
                    <div className="checkout">
                        <div className="checkout_name">Checkout</div>
                        <div className="checkout_input_cont">
                            <input className="checkout_input" type="text" placeholder="Name"></input>
                        </div>

                        <div className="checkout_input_cont">
                            <input className="checkout_input" type="email" placeholder="Email"></input>
                        </div>

                        <div className="checkout_input_cont">
                            <input className="checkout_input" type="text" placeholder="Address"></input>
                        </div>

                        <div className="checkout_input_cont">
                            <input className="checkout_input" type="text" placeholder="Phone Number" maxLength="10"></input>
                        </div>

                        <div className="checkout_order">Order</div>
                        <div className="checkout_cancel">Cancel</div>
                    </div>
                </Modal>
            </div>
        ) ;
    }
}

const mapStateToProps = state => {
    return{
        checkout: state.checkout
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCheckoutHandler: (name,price) => dispatch({type: actionTypes.CHECKOUT_CONT}),
        onCheckoutCancelHandler: () => dispatch({type: actionTypes.CHECKOUT_CANCEL})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);