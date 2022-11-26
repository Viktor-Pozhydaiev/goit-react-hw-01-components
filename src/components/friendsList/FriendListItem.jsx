import css from '../FriendsList/Friends.module.css';
import { PropTypes } from 'prop-types';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.items}>
      <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
FriendsListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
