import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-orders'

import './Orders.css';
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import Order from '../../Component/Order/Order'
import Spinner from '../../UI/Spinner/Spinner'
import * as actions from '../../Store/actions/actions'

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

        let content =  <div className="orderss">
                            {this.state.orders.map(order =>(
                                <Order 
                                        key={order.id}
                                        item={order.item}
                                        name={order.name}
                                        address={order.address}
                                        phone={order.phone_number}
                                        price={order.price}
                                />
                            ))}
                        </div>

        if(this.state.loading){
            content = <Spinner/>
        }

        return(
            <div>
                <Navbar/>

                <div className="orders_heading">ORDERS</div>

                {content}
                
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
        onOrderHandler: (name,price) => dispatch(actions.purchaseCont(name,price))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);