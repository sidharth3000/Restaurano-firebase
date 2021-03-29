import React, {Component} from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'

import Home from './Container/Home/Home';
import Breakfast from './Container/Menu/Breakfast/Breakfast';
import Lunch from './Container/Menu/Lunch/Lunch';
import Dinner from './Container/Menu/Dinner/Dinner';
import Orders from './Container/Orders/Orders';
import Checkout from './Container/Checkout/Checkout';
import Feedback from './Container/Feedback/Feedback';
import Auth from './Container/Auth/Auth';
import * as actions from './Store/actions/actions';


class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignup();
  }


  render() {

    let routes =  <div>
                    <Route path='/authenticate' component={Auth} />
                    <Route path='/feedback' component={Feedback} />
                    <Route path="/" exact component={Home} />
                  </div>
     if(this.props.isAuth){
       routes=   <div>
                    <Route path='/authenticate' component={Auth} />
                    <Route path='/feedback' component={Feedback} />
                    <Route path='/checkout' component={Checkout} />
                    <Route path='/orders' component={Orders} />
                    <Route path="/breakfast" component={Breakfast} />
                    <Route path="/lunch" component={Lunch} />
                    <Route path="/dinner" component={Dinner} />
                    <Route path="/" exact component={Home} />
                  </div>
     }

      return (

        <div>
        {routes}
      </div>

      );
  }
}

const mapStateToProps = state => {
  return{
      isAuth: state.token !== null
     
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
