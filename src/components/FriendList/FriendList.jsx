import css from '../FriendList/friendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import friends from '../data/friends.json';
import PropTypes from 'prop-types';



export const FriendList = props => {
  return (
    <ul className={css['friend-list']}>
      {friends.map( friend =>(
      <FriendListItem isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name} />)
      )}
      </ul>
  );
};
//

FriendList.prototype = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
