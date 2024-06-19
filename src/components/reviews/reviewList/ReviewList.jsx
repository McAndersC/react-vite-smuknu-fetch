
import ReviewItem from "../reviewListItems/ReviewItem";
import useReviews from "../../../hooks/useReviews.jsx";
import { useEffect, useState } from "react";


const Loader = () => {

    return <div>LOADER</div>

}

const List = ({reviews}) => {

    return reviews.map((review, index) => {  
        return <ReviewItem key={index} review={review}></ReviewItem>
    })

}


const ReviewList = () => {

    const {reviews, loading} = useReviews();



    return (
        <div>
            <h1>Reviews</h1>

            {loading  ? <Loader></Loader> : <List reviews={reviews}></List> }


        </div>
    );
};

export default ReviewList;