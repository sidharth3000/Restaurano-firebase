import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from "../../axios-orders";
import {Link} from 'react-router-dom';

import './Checkout.css';
import Modal from '../../UI/Modal/Modal';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Spinner from '../../UI/Spinner/Spinner';
import * as actionTypes from '../../Store/actions';

class Checkout extends Component {

    state={
        loading:false,
        name: null,
        address: null,
        phone: null,

    }

    onNameChangeHandler = (evt) => {
        this.setState({name: evt.target.value});
    }

    onAddressChangeHandler = (evt) => {
        this.setState({address: evt.target.value});
    }

    onPhoneChangeHandler = (evt) => {
        this.setState({phone: evt.target.value});
    }

    purchaseContinueHandler = () => {
        this.setState({loading: true});
        const order = {
            item: this.props.item,
            name: this.state.name,
            address: this.state.address,
            phone_number: this.state.phone,
            price: this.props.price
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

        let checkout =  <Modal show={true} >
                            <div className="checkout">
                                <div className="checkout_name">Checkout</div>

                                <div className="checkout_input_cont">
                                    <input className="checkout_input" type="text" placeholder="Name" onChange={this.onNameChangeHandler}></input>
                                </div>

                                <div className="checkout_input_cont">
                                    <input className="checkout_input" type="text" placeholder="Address" onChange={this.onAddressChangeHandler}></input>
                                </div>

                                <div className="checkout_input_cont">
                                    <input className="checkout_input" type="text" placeholder="Phone Number" maxLength="10" onChange={this.onPhoneChangeHandler}></input>
                                </div>

                                <div className="checkout_order" onClick={this.purchaseContinueHandler}>Order</div>
                                <Link to='/'><div className="checkout_cancel">Cancel</div></Link>
                            </div>
                        </Modal>

        if(this.state.loading){
            checkout = <Spinner/>
        }
        return(
            <div>

                <Backdrop show={true}/>
               {checkout}
            </div>
        ) ;
    }
}

const mapStateToProps = state => {
    return{
        item: state.name,
        price: state.price
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCheckoutHandler: (name,price) => dispatch({type: actionTypes.CHECKOUT_CONT}),
        onCheckoutCancelHandler: () => dispatch({type: actionTypes.CHECKOUT_CANCEL})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);