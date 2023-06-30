import { useState } from 'react';
import ReviewCard from './ReviewCard';
import RatingButtons from './RatingButtons';
import RatingSelect from './RatingSelect';

const ReviewForm = ({handleAdd}) => { // Adds input box for the user to add a new review
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = (event) => {
      if (text === '') {
        setBtnDisabled(true);
        setMessage(null);
      } else if (text !== '' && text.trim().length <= 10) {
        setMessage('Text must be at least 10 characters'); // Create a message <div> for the user if validation fails
        setBtnDisabled(true);
     } else {
      setMessage(null);
      setBtnDisabled(false);
    }
     setText(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            };
        handleAdd(newFeedback);
        setText('');
        }
      };

return (
    // Wrapped inside ReviewCard user interface
    <ReviewCard>
        <form onSubmit={handleSubmit}>
        <h2>How would you rate this product?</h2>
        <RatingSelect select={rating => setRating(rating)} />
        <div className="input-group">
            <input 
            onChange={handleTextChange} 
            type="text" 
            placeholder="Write a review" 
            value={text} 
            />
            <button type="submit" isDisabled={btnDisabled}> Send </button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </ReviewCard>
  );
}
export default ReviewForm;