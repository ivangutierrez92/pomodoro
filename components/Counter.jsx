import React from 'react';
import styles from '../styles/Counter.module.css';

const Counter = ({ minutes, seconds, startOrStop }) => {
  return (
    <button type="button" onClick={startOrStop} className={styles['Counter__button']}>
      {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </button>
  );
};

export default Counter;
