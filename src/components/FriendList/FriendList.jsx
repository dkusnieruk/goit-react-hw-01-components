import css from '../FriendList/friendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
export const FriendList = props => {
  return (
    <ul className={css['friend-list']}>
      <FriendListItem />
    </ul>
  );
};
//

FriendList.prototype = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
