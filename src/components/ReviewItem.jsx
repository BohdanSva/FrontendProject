import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import ReviewCard from './ReviewCard';

const ReviewItem = ({ item, handleDelete }) => { // ReviewItem gets the review data from ReviewList and displays them as ReviewCards
const [rating, setRating] = useState(7);
const [text, setText] = useState('This is a Review item');

const handleClick = () => {
  setRating(prev => {
  return prev + 1;
})};

return (
  <ReviewCard>
    <div className="num-display">{item.rating}</div>
    <button onClick={() => handleDelete(item.id)} className="close">
      {/* Import X-shaped icon from React Icons / FontAwesome*/}
      <FaTimes color="grey"/>
    </button>
    <div className="text-display">{item.text}</div>
  </ReviewCard>
 );
};

ReviewItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ReviewItem;