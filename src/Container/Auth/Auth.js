import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Modal from '../../UI/Modal/Modal';
import Backdrop from '../../UI/Backdrop/Backdrop';
import * as actions from '../../Store/actions/actions';

import './Auth.css'

class Auth extends Component {

    state = {
        email: null,
        password: null,
        singnup: true
    }

    onEmailChangeHandler = (evt) => {
        this.setState({email: evt.target.value});
    }

    onPasswordChangeHandler = (evt) => {
        this.setState({password: evt.target.value});
    }

    onSubmitHandler = (event) => {
        console.log('...');
        // event.preventdefault();
        this.props.onAuth(this.state.email, this.state.password);
    }

    switchAuthModeHandker = () => {
        this.setState(prevstate => {
            return{
                signup: !prevstate.signup
            };
        });
    }

    render() {
        return (

            <div className="auth">
                <Backdrop show={true}/>
                <Modal show={true} >
                            <div className="auth_form">
                                <div className="auth_mode" onClick={this.switchAuthModeHandker}>
                                  Switch to {this.state.signup ? "SING-IN" : "SIGN-UP"}
                                </div>

                                <div className="checkout_input_cont">
                                    <input className="checkout_input" type="email" placeholder="Email" onChange={this.onEmailChangeHandler}></input>
                                </div>

                                <div className="checkout_input_cont">
                                    <input className="checkout_input" type="password" placeholder="Password" onChange={this.onPasswordChangeHandler}></input>
                                </div>

                                <div className="checkout_order" onClick={this.onSubmitHandler}>Submit</div>
                                <div className="checkout_cancel">Cancel</div>
                            </div>
                        </Modal>
            </div>

        );
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    }
};

export default connect(null, mapDispatchToProps)(Auth);