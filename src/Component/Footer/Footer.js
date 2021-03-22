import React from 'react';


import './Footer.css';

// import logo from '../../Assets/logo.png';

const footer = ( props ) => {
   
    return (
        <div className='footer'>
           <img src={'Assets/logo.png'} className='footer_logo'></img>
           <div className='footer_name'>RESTAURANO</div>
           <div className='footer_p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et magna aliqua.
                Mattis enim ut tellus elementum sagittis vitae et.
                Sed turpis tincidunt
            </div>

            <div>
                <i className="fa fa-facebook-square handle"></i>
                <i className="fa fa-instagram handle"></i>
                <i className="fa fa-twitter handle"></i>
                <i class="fa fa-github handle"></i>
            </div>

            <div className='footer_strip'></div>
            
        </div>
    );
};

export default footer;