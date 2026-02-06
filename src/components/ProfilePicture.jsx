import PropTypes from 'prop-types';
import '../styles/components.css';

const ProfilePicture = ({ image }) => (
  <a id="profilePicture" href="#popup">
    <img src={image} alt="Profile Picture" />
  </a>
);

ProfilePicture.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ProfilePicture;