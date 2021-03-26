import React, { Component } from 'react';

import './Order.css'

class Order extends Component {
    render () {
    
        return(
            <div className="order">

                <div className="order_item">
                    {this.props.item}
                </div>

                <div className="order_price">
                    <p style={{display: "inline"}}>$</p>{this.props.price}      
                </div>
               
               <div className="order_lower">
                <div className="order_name">
                        {this.props.name}
                </div>

                <div className="order.address">
                        {this.props.address}
                </div>
                
                <div className="order.phone">
                        {this.props.phone}
                </div>
               </div>
              
               
            </div>
        ) ;
    }
}



export default Order;