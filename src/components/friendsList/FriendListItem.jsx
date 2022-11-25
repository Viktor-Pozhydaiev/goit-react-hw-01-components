import css from '../friendsList/Friends.module.css';

export const FriendsListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className={css.items}>
      <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
