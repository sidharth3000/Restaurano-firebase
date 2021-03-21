import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import Home from './Container/Home/Home';
import Breakfast from './Container/Menu/Breakfast/Breakfast';
import Lunch from './Container/Menu/Lunch/Lunch';
import Dinner from './Container/Menu/Dinner/Dinner';

function App() {
  return (
    <div >
      <Route path="/breakfast" component={Breakfast} />
      <Route path="/" exact component={Home} />
    </div>
  );
}

export default App;
