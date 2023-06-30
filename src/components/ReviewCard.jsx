import PropTypes from 'prop-types';

const ReviewCard = ({ children, reverse }) => { // This component serves as the user interface for ReviewItems
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000'
       }}
     >
       {children}
     </div>
  );
}
ReviewCard.defaultProps = {
  reverse: false
};
ReviewCard.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
};
export default ReviewCard;