
import css from '../FriendListItem/friendListItem.module.css';
import PropTypes from 'prop-types';



export const FriendListItem = ({isOnline, avatar, name}) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{
          backgroundColor: isOnline === true ? 'green' : 'red',
        }}
      >
        {isOnline}
      </span>
      <img
        className={css.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};
//

FriendListItem.prototype = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
