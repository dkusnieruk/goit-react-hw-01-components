import friends from '../Friends/friends.json';
import css3 from '../Friends/friends.module.css';
export const FriendList = props => {

    return (
        <ul className={css3['friend-list']}>
       
       {friends.map(props =>
   (
    <li className={css3.item}>
    <span className={css3.status} 
    style= {{backgroundColor: props.isOnline ===true ? 'green' : 'red'}}
    >{props.isOnline}</span>
   <img className={css3.avatar} src={props.avatar} alt="User avatar" width="48" />
   <p className={css3.name} >{props.name}</p>
</li>
       
      ))}
    
      </ul>
    );
  };
  

