import PropTypes from "prop-types";
import css from '../Profile/profile.module.css';

export const Profile = props => {

    
    return (
      <div className={css.profile}>
  <div className={css.description}>
    <img
      src={props.avatar}
      alt={props.username}
      className={css.avatar}
    />
    <p className={css.name}>{props.username}</p>
    <p className={css.tag}>@{props.tag}</p>
    <p className={css.location}>{props.location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.profileList}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{props.stats.followers}</span>
    </li>
    <li className={css.profileList} >
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{props.stats.views}</span>
    </li>
    <li className={css.profileList}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{props.stats.likes}</span>
    </li>
  </ul>
</div>    );

  };
  
Profile.propTypes ={
    avatar : PropTypes.string,
    username: PropTypes.string,
    tag :PropTypes.string,
    location :PropTypes.string,
    followers :PropTypes.number,
    views :PropTypes.number,
    likes:PropTypes.number,
};


