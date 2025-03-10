import '../styles/components.css';

const ProfilePicture = ({ image }) => (
  <a id="profilePicture" href="#popup">
    <img src={image} alt="Profile Picture" />
  </a>
);

export default ProfilePicture;







// import './popup.css';

// function ProfilePicture() {
//   return (
//     <a id="profilePicture" href="#popup">
//       <img src="/assets/midas.jpeg" alt="Profile Picture" />
//     </a>
//   );
// }

// export default ProfilePicture;
