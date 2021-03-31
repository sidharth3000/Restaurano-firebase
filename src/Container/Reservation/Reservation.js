import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-orders'

import './Reservation.css';
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import Spinner from '../../UI/Spinner/Spinner'
import * as actions from '../../Store/actions/actions'

class Reservation extends Component {

    state = {
        members: null,
        date: null,
        loading: true,
        res: null
    }

    onMembersChangeHandler = (evt) => {
        this.setState({members: evt.target.value});
    }

    onDateChangeHandler = (evt) => {
        this.setState({date: evt.target.value});
    }

    componentDidMount () {
        axios.get('/reservation.json')
        .then(res => {
            const fetchedres = [];
            for(let key in res.data) {
                fetchedres.push({
                    ...res.data[key],
                    id: key
                });
            }
            this.setState({loading: false, orders: fetchedres})
        })
        .catch(err =>{
            this.setState({loading: false})
        })
    }

    postResHandler = () => {
        console.log("clicked")
        this.setState({loading: true});
        const res = {
            members: this.state.members,
            date: this.state.date
        }
        axios.post('/reservation.json', res)
            .then(response => {
                this.setState({loading: false});
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    render () {

        return(
            <div>
                <Navbar/>

                <div className="orders_heading">Reservation</div>

                <div className="reserve">
                    <div className="res_input_outer">
                        <input placeholder="Number of members" className="res_input" maxLength="2" onChange={this.onMembersChangeHandler}></input>
                    </div>

                    <div className="res_input_outer">
                        <input placeholder="Date DD//MM" className="res_input" maxLength="5" onChange={this.onDateChangeHandler}></input>
                    </div>

                    <div className="reserve_bttn" onClick={this.postResHandler}>Reserve</div>
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
        token: state.token,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderHandler: (name,price) => dispatch(actions.purchaseCont(name,price))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);