import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import {Profile} from './components/Profile';
import { Stats } from 'components/Stats';
import './index.css';
import './profile.css';
import './stats.css'
import data from './json/data.json';
import user from './json/user.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

 
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
    <Stats stats={data} />
  </React.StrictMode>
);
