import { Profile } from './profile/Profile';
import { FriendsList } from './friendsList/FriendList';
import { Transactions } from './transactionHistory/TransactionHistory';
// import { Statistics } from './statistics/Statistics';
import user from '../user.json';
// import data from '../data.json';
import transactions from '../transactions.json';
import friends from '../friends.json';

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
      <FriendsList friends={friends} />
      <Transactions items={transactions} />
    </>
  );
};
