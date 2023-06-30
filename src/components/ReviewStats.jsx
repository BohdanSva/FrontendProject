import PropTypes from 'prop-types';

const ReviewStats = ({ review }) => {   // Calculate the average rating

    let average =
        review.reduce((accumulator, current) => { // Reduce calculates the average of all rating values
        return accumulator + current.rating;
        }, 0) / review.length;
    average = average.toFixed(1);

return (
    <div className="feedback-stats">
        ProductReviewStats
        <h4>{review.length} Product Reviews</h4>
        <h4>Average Product Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

ReviewStats.propTypes = {
  review: PropTypes.array.isRequired
};
export default ReviewStats;