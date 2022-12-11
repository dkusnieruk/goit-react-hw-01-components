import user from './Profile/user.json';
import data from './Stats/data.json';
import {Profile} from './Profile/Profile';
import {Stats} from './Stats/Stats';

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
    </div>
  );
};
