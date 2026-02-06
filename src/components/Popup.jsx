import PropTypes from 'prop-types';
import '../styles/popup.css';

const Popup = ({ image, quote }) => (
  <div className="overlay" id="popup">
    <div className="popup">
      <div className="popup-photo">
        <a href={image} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="Profile Picture" />
        </a>
      </div>
      <div className="popup-quote">{quote}</div>
      <a className="popup-close" href="#">&times;</a>
    </div>
  </div>
);

Popup.propTypes = {
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default Popup;