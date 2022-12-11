import user from './Profile/user.json';
import data from './Stats/data.json';
import {Profile} from './Profile/Profile';
import {Stats} from './Stats/Stats';
import friends from './Friends/friends.json';
import {FriendList} from './Friends/FriendsList';
import transactions from './Transactions/transactions.json';
import { Transaction } from './Transactions/Transaction';



export const App = () => {
  return (
    <div>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
    <Stats stats={data} />
    <FriendList friends={friends} />
    <Transaction items={transactions} />;
    </div>
  );
};
