import friends from '../data/friends.json';
import css from '../FriendListItem/friendListItem.module.css';

import PropTypes from 'prop-types';
export const FriendListItem = props => {
  return friends.map(props => (
    <li className={css.item}>
      <span
        className={css.status}
        style={{
          backgroundColor: props.isOnline === true ? 'green' : 'red',
        }}
      >
        {props.isOnline}
      </span>
      <img
        className={css.avatar}
        src={props.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{props.name}</p>
    </li>
  ));
};
//

FriendListItem.prototype = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
