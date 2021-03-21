import React, { Component } from 'react';

import './Card.css';

import Coffee from '../../Assets/coffee.jpg'

class Home extends Component {
    render () {
    
        return(
            <div className="card">
                <img className="card_product" src={Coffee}/>
                <div className="card_right">

                    <div className="card_name">{this.props.name}</div>

                    <div className="card_info">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    try. Lorem Ipsum has been the industry's standard dummy text ever since
                    1500s, when an unknown printer took a galley of type and scrambled it to make
                    type specimen book.
                    </div>

                    <div className="buy">Add to kart</div>
                </div>
            </div>
        ) ;
    }
}



export default Home;