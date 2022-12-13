import user from './data/user.json';
import data from './data/data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import friends from './data/friends.json';
import { FriendList } from './FriendList/FriendList';
import transactions from './data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

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
      <Statistics statistics={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
