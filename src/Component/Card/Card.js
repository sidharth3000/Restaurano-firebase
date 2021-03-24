import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Card.css';
import * as actionTypes from '../../Store/actions'

class Home extends Component {

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

                    <div className="buy" onClick={() => this.props.onOrderHandler(this.props.name, 10)}>Add To Basket</div>
                </div>
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