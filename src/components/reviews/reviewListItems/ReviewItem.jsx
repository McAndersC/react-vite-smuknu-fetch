import styles from "./reviewItem.module.css"
const ReviewItem = ({review = {}}) => {

    

    return (
        <div className={styles.reviewItem}>
            <div className={styles.header}>
                <img src={review.image}></img>
                <div>
                    <span className={styles.name}>{review.name}</span>
                    <span>{review.byline}</span>
                </div>
            </div>
            <p dangerouslySetInnerHTML={{__html: review.description}}></p>

            <hr></hr>
        </div>
    );
};
export default ReviewItem;