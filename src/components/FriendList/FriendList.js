import PropTypes from 'prop-types';
import FriendCard from './FriendCard';
import s from './FriendsList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <FriendCard avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
