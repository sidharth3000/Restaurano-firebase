import React, { Component } from 'react';

import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer'
import Backdrop from '../../UI/Backdrop/Backdrop';

// import breakfast from 'Assets/breakfast.png';
// import lunch from 'Assets/lunch.png';
// import dinner from 'Assets/dinner.png';
// import chef from '../../Assets/chef.jpg';



import './Home.css'

class Home extends Component {
    render () {
    
        return(
            <div>
                <Navbar/>

                <div class="home_parallax">
                    <div className='home_name'>
                        <span style={{fontSize:"50px"}}>Welcome To</span><br/>
                    <span style={{color: "#"}}>The</span> RESTURANO
                    </div>
                </div>

                <div className='home_discover'>
                    <div className='home_discover_head'>DISCOVER</div>

                    <div className="home_cardholder">
                        <div className='home_card'>
                            <img className='home_discover_img' src={'Assets/breakfast.png'}></img>
                            <div className='home_time'>Breakfast</div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna
                                  aliqua.</div>
                        </div>

                        <div className='home_card'>
                            <img className='home_discover_img' src={'Assets/lunch.png'}></img>
                            <div className='home_time'>Lunch</div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna
                                  aliqua.</div>
                        </div>

                        <div className='home_card'>
                            <img className='home_discover_img' src={'Assets/dinner.png'}></img>
                            <div className='home_time'>Dinner</div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna
                                  aliqua.</div>
                        </div>
                    </div>

                   
                </div>

                <div className='chefs'>

                    <div className='home_team_head'>Our Chefs</div>

                    <div className="home_cardholder">
                        <div className='chef_card'>
                            <img src={'../../Assets/chef.jpg'}></img>
                            <div className="chef_name">Sidharth</div>
                            <div>cooffee expert</div>
                        </div>

                        <div className='chef_card'>
                            <img src={'../../Assets/chef.jpg'}></img>
                            <div className="chef_name">Aditya</div>
                            <div>cooffee expert</div>
                        </div>

                        <div className='chef_card'>
                            <img src={'../../Assets/chef.jpg'}></img>
                            <div className="chef_name">Shubham</div>
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