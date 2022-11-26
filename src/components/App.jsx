import { Profile } from './Profile/Profile';
import { FriendsList } from './FriendsList/FriendList';
import { Transactions } from './TransactionHistory/TransactionHistory';
import { Statistics } from './Statistics/Statistics';
import user from '../data/user.json';
import data from '../data/data.json';
import transactions from '../data/transactions.json';
import friends from '../data/friends.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendsList friends={friends} />
      <Transactions items={transactions} />
    </>
  );
};
