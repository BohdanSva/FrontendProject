import ReviewItem from "./ReviewItem";

const ReviewList = ({ review, handleDelete }) => {
    if (!review || review.length === 0) { // If no reviews, don't render and don't pass the props to ReviewItem
        return <p>No reviews yet</p>;
    } return (
        <div className="feedback-list">
            {review.map(item => ( <ReviewItem key={item.id} item={item} handleDelete={handleDelete} /> ))}
        </div>
    )
}

export default ReviewList;