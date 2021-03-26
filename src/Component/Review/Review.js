import React, { Component } from 'react';

import './Review.css'

class Review extends Component {
    render () {

        let stars =  <div>not rated</div>
            
        if(this.props.ratting==1){
            stars = <div>
                        <i className="fa fa-star star"></i>
                    </div>
        }
        
        if(this.props.ratting==2){
            stars = <div>
                        <i className="fa fa-star star"></i>
                        <i className="fa fa-star star"></i>
                    </div>
        }

    if(this.props.ratting==3){
        stars = <div>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                </div>
    }

    if(this.props.ratting==4){
        stars = <div>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                </div>
    }

    if(this.props.ratting>=5){
        stars = <div>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                </div>
    }
    
        return(

            
            <div className="review_view">

                <div className="review_stars">
                    {stars}
                </div>
        
               <div className="review_body">
                   {this.props.body}
                </div>
               
            </div>
        ) ;
    }
}



export default Review;