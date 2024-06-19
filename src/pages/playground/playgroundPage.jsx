import { useEffect, useState } from "react";
import useReviews from "../../hooks/useReviews";


const PlaygroundPage = () => {

    const {reviews, getReviewById, review} = useReviews();
    // const [review, setReview] = useState(null)
    const [count, setCount] = useState(0)

    
    
    
    useEffect( () => {

        let review = getReviewById("641ef53c979a9b182b0bfef4")
        // setReview(review)
        
        
      }, [getReviewById])
  

    return (
        <div>
            playgroundPage {reviews.length}


            {review ? "JEG ER DER" : "ER DER IKKE"}
            <br/>
            <br/>
            <br/>
            <br/>


            NAVN:
            

            Beskrivelse {review?.description}
        </div>
    );
};
export default PlaygroundPage;