import PropTypes from 'prop-types';
import '../styles/components.css';

const UserInfo = ({ username, hashtag }) => (
  <>
    <div id="userName">{username}</div>
    <div id="hashtag">{hashtag}</div>
  </>
);

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  hashtag: PropTypes.string.isRequired,
};

export default UserInfo;