import React, { Component } from 'react';
import axios from "../../axios-orders";
import HeadShake from 'react-reveal/HeadShake';

import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import Review from '../../Component/Review/Review';
import Spinner from '../../UI/Spinner/Spinner';
import './Feedback.css'

class Feedback extends Component {

    state = {
        loading: true,
        review: "NA",
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

    onScroll () {
        window.scrollBy(0,950)
    }


    render () {

        let posts =
        <div>
             <HeadShake>
                <button className="review_write_bttn" onClick={this.onScroll}>
                <i className="fa fa-pencil pencil"></i>
                    Write a review
                </button>
                </HeadShake>

                <div className="read_reviews">
                        {this.state.reviews.map(review =>(
                            <Review 
                                    ratting={review.stars}
                                    body={review.body}
                            />
                        ))}
                    </div>
        </div>
       
    
        if(this.state.loading){
            posts=<Spinner/>
        }

        return(
            <div>
               <Navbar/>

            <div className="feedback_cont">

                <div className="feedback_head">
                    Feedback
                </div>

               {posts}

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