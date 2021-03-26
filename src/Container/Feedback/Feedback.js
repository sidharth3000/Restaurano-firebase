import React, { Component } from 'react';
import axios from "../../axios-orders";

import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import Review from '../../Component/Review/Review';
import Spinner from '../../UI/Spinner/Spinner';
import './Feedback.css'

class Feedback extends Component {

    state = {
        loading: false,
        review: null,
        stars: "not rated",
        reviews: []
    }

    componentDidMount () {
        axios.get('/reviews.json')
        .then(res => {
            const fetchedReviews = [];
            for(let key in res.data) {
                fetchedReviews.push({
                    ...res.data[key],
                    id: key
                });
            }
            this.setState({loading: false, reviews: fetchedReviews})
        })
        .catch(err =>{
            this.setState({loading: false})
        })
    }

    onReviewChangeHandler = (evt) => {
        this.setState({review: evt.target.value});
    }

    onRatingChangeHandler = (evt) => {
        this.setState({stars: evt.target.value});
    }

    postReviewHandler = () => {
        this.setState({loading: true});
        const review = {
            body: this.state.review,
            stars: this.state.stars
        }
        axios.post('/reviews.json', review)
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

            <div className="feedback_cont">

                <div className="feedback_head">
                    Feedback
                </div>

                <button className="review_write_bttn">
                <i className="fa fa-pencil pencil"></i>
                    Write a review
                </button>

               <div className="read_reviews">
                            {this.state.reviews.map(review =>(
                                <Review 
                                        ratting={review.stars}
                                        body={review.body}
                                />
                            ))}
                </div>

               <div className="review">

                   <div className="rating_outer">
                       <input type="text" placeholder="Ratings (1-5)" className="review_rating" onChange={this.onRatingChangeHandler}></input>
                   </div>

                   <div className="write_outer">
                       <input type="text" placeholder="write your review here" className="review_write" onChange={this.onReviewChangeHandler}></input>
                   </div>

                   <div className="review_post" onClick={this.postReviewHandler}>Post</div>
               </div>

               </div>

               <Footer/>

            </div>
        ) ;
    }
}

export default Feedback;