import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-orders'

import './Orders.css';
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import Order from '../../Component/Order/Order'
import * as actionTypes from '../../Store/actions'

class Home extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount () {
        axios.get('/orders.json')
        .then(res => {
            const fetchedOrders = [];
            for(let key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            this.setState({loading: false, orders: fetchedOrders})
        })
        .catch(err =>{
            this.setState({loading: false})
        })
    }

    render () {
        return(
            <div className="order">
                <Navbar/>
<div>
   {this.state.orders.map(order =>(
       <Order 
            key={order.id}
            item={order.item}
       />
   ))}
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

const mapDispatchToProps = dispatch => {
    return {
        onOrderHandler: (name,price) => dispatch({type: actionTypes.PURCHASE_CONT, name: name, price: price})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);