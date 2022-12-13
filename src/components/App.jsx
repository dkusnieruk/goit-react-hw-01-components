import user from './data/user.json';
import data from './data/data.json';
import { Profile } from './Profile/Profile';
import { Stats } from './Stats/Stats';
import friends from './data/friends.json';
import { FriendList } from './FriendList/FriendList';
import transactions from './data/transactions.json';
import { TransactionHistory } from './TransactionsHistory/TransactionHistory';

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
      <TransactionHistory items={transactions} />;
    </div>
  );
};
