import React, { Component } from 'react';

import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer'
import Backdrop from '../../UI/Backdrop/Backdrop';

import breakfast from '../../Assets/breakfast.png';
import lunch from '../../Assets/lunch.png';
import dinner from '../../Assets/dinner.png';
import chef from '../../Assets/chef.jpg';

import './Home.css'

class Home extends Component {
    render () {
    
        return(
            <div>
                <Navbar/>

                <div class="home_parallax">
                    <div className='home_name'>
                    <span style={{color: "#"}}>The</span> RESTURANO
                    </div>
                </div>

                <div className='home_discover'>
                    <div>DISCOVER</div>

                    <div className="home_cardholder">
                        <div className='home_card'>
                            <img className='home_discover_img' src={breakfast}></img>
                            <div>Breakfast</div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna
                                  aliqua.</div>
                        </div>

                        <div className='home_card'>
                            <img className='home_discover_img' src={lunch}></img>
                            <div>Lunch</div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna
                                  aliqua.</div>
                        </div>

                        <div className='home_card'>
                            <img className='home_discover_img' src={dinner}></img>
                            <div>Dinner</div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna
                                  aliqua.</div>
                        </div>
                    </div>

                   
                </div>

                <div className='chefs'>

                    <div>Our Team</div>

                    <div className="home_cardholder">
                        <div>
                            <img src={chef}></img>
                            <div>Sidharth</div>
                            <div>cooffee expert</div>
                        </div>

                        <div>
                            <img src={chef}></img>
                            <div>Sidharth</div>
                            <div>cooffee expert</div>
                        </div>

                        <div>
                            <img src={chef}></img>
                            <div>Sidharth</div>
                            <div>cooffee expert</div>
                        </div>
                    </div>
                </div>

                <Footer/>

            </div>
        ) ;
    }
}



export default Home;