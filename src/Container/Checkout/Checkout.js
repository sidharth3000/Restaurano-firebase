import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from "../../axios-orders";
import {Link, Redirect} from 'react-router-dom';

import './Checkout.css';
import Modal from '../../UI/Modal/Modal';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Spinner from '../../UI/Spinner/Spinner';
import * as actions from '../../Store/actions/actions';

class Checkout extends Component {

    state={
        loading:false,
        name: null,
        address: null,
        phone: null,
        ordered: false

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
        axios.post('/orders.json?auth=' + this.props.token, order)
            .then(response => {
                this.setState({loading: false});
                this.setState({ordered: true})
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    render () {

        let orders = null;
        if(this.state.ordered){
            orders = <Redirect to="/orders"/>
        }

        let checkout =  <div className="back">
        
                        <Modal show={true} >
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
                        </div>
        if(this.state.loading){
            checkout = <Spinner/>
        }
        return(
            <div>
{orders}
                <Backdrop show={true}/>
               {checkout}
            </div>
        ) ;
    }
}

const mapStateToProps = state => {
    return{
        item: state.name,
        price: state.price,
        token: state.token,
        isAuth: state.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCheckoutHandler: (name,price) => dispatch(actions.checkoutCont()),
        onCheckoutCancelHandler: () => dispatch(actions.checkoutCancel())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);