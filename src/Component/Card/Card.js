import React, { Component } from 'react';
import axios from "../../axios-orders";

import './Card.css';

class Home extends Component {

    purchaseContinueHandler = () => {
        const order = {
            item: "coffee"
        }
        axios.post('/orders.json', order)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    render () {
        return(
            <div className="card">
                <img className="card_product" src={'Assets/' + this.props.name + '.jpg'}/>
                <div className="card_right">

                    <div className="card_name">{this.props.name}</div>
                    <div className="card_price">$7</div>

                    <div className="card_info">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    try. Lorem Ipsum has been the industry's standard dummy text ever since
                    1500s, when an unknown printer took a galley of type and scrambled it to make
                    type specimen book.
                    </div>

                    <div className="buy" onClick={this.purchaseContinueHandler}>Add To Basket</div>
                </div>
            </div>
        ) ;
    }
}



export default Home;