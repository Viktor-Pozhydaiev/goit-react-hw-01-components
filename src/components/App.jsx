import { Profile } from './profile/Profile';
import { FriendsList } from './friendsList/FriendList';
import { Transactions } from './transactionHistory/TransactionHistory';
import { Statistics } from './statistics/Statistics';
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
      <FriendsList friends={friends} />
      <Transactions items={transactions} />
    </>
  );
};
