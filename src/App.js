import './App.css';
import { Route } from 'react-router-dom';

import Home from './Container/Home/Home';
import Breakfast from './Container/Menu/Breakfast/Breakfast';
import Lunch from './Container/Menu/Lunch/Lunch';
import Dinner from './Container/Menu/Dinner/Dinner';
import Orders from './Container/Orders/Orders';
import Checkout from './Container/Checkout/Checkout';
import Feedback from './Container/Feedback/Feedback';
import Auth from './Container/Auth/Auth';

function App() {
  return (
    <div>
      <Route path='/authenticate' component={Auth} />
      <Route path='/feedback' component={Feedback} />
      <Route path='/checkout' component={Checkout} />
      <Route path='/orders' component={Orders} />
      <Route path="/breakfast" component={Breakfast} />
      <Route path="/lunch" component={Lunch} />
      <Route path="/dinner" component={Dinner} />
      <Route path="/" exact component={Home} />
    </div>
  );
}

export default App;
