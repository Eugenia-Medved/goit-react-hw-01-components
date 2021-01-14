import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import s from './FriendCard.module.css';

function FriendCard({ avatar, name, isOnline }) {
  //   const activeClass = isOnline ? s.online : s.offline;

  return (
    <Fragment>
      <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={`avatar of` + { name }} width="48" />
      <p className={s.name}>{name}</p>
    </Fragment>
  );
}

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendCard;
