import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Breakfast.css';
import Navbar from '../../../Component/Navbar/Navbar';
import Card from '../../../Component/Card/Card';
import Footer from '../../../Component/Footer/Footer'
import Modal from '../../../UI/Modal/Modal'
import Backdrop from '../../../UI/Backdrop/Backdrop'
import Spinner from '../../../UI/Spinner/Spinner'
import axios from "../../../axios-orders";
import * as actionTypes from '../../../Store/actions'

class Breakfast extends Component {

    state={
        loading:false
    }

    purchaseContinueHandler = () => {
        this.setState({loading: true});
        console.log("clickes");
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

        let content= <Modal show={this.props.show} purchseCancel={this.props.onOrderCancelHandler} purchaseContinue={this.purchaseContinueHandler}>
                        <div className="child_modal">
                        <img className="modal_image" src={'Assets/' + this.props.item_name + '.jpg'}/>
                        <div className="xyz">
                            <div className="modal_item">{this.props.item_name}</div>
                            <div className="modal_price">{this.props.price}</div>
                        </div>
                        </div>
                        
                    </Modal>

        if(this.state.loading){
            content=<Spinner/>
        }
    
        return(
            <div>
               <Navbar/>
            
                <Backdrop show={this.props.show} purchseCancel={this.props.onOrderCancelHandler}/>
                    {content}

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
        onOrderCancelHandler: () => dispatch({type: actionTypes.PURCHASE_CANCEL})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Breakfast);