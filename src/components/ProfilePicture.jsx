import '../styles/components.css';

const ProfilePicture = ({ image }) => (
  <a id="profilePicture" href="#popup">
    <img src={image} alt="Profile Picture" />
  </a>
);

export default ProfilePicture;

