import user from '../json/user.json';
import PropTypes from "prop-types";

export const Profile = props => {

    console.log(user.avatar);
    
    return (
      <div className="profile">
  <div className="description">
    <img
      src={props.avatar}
      alt={props.username}
      className="avatar"
    />
    <p className="name">{props.username}</p>
    <p className="tag">@{props.tag}</p>
    <p className="location">{props.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{props.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{props.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{props.stats.likes}</span>
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
