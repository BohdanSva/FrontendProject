import PropTypes from 'prop-types';

const ReviewHeader = ({ text, bgColor, textColor }) => {
const headerStyles = {
  backgroundColor: bgColor,
  color: textColor
};
return (
<header style={headerStyles}>
    <div className="container">
    <h2>{text}</h2>
   </div>
 </header>
 );
}
ReviewHeader.defaultProps = {
  text: 'Product Review',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#6aff80'
};
ReviewHeader.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
};

export default ReviewHeader;