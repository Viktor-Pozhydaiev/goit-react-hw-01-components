import PropTypes from 'prop-types';
import css from '../friendsList/Friends.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friends => (
        <li key={friends.id} className={css.items}>
          <span className={`${css.status} ${css[friends.isOnline]}`}>
            {friends.isOnline}
          </span>
          <img
            className={css.avatar}
            src={friends.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friends.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
