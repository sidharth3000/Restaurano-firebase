import React, { Component } from 'react';

import './Order.css'

class Order extends Component {
    render () {
    
        return(
            <div>
               {this.props.item}
            </div>
        ) ;
    }
}



export default Order;