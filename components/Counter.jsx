import React from 'react';
import styles from '../styles/Counter.module.css';

const Counter = ({ minutes, seconds, setStarted}) => {
  const onToggleStarted = () => {
    setStarted(started => !started);
  };

  return (
    <div>
      <button type="button" onClick={onToggleStarted} className={styles['Counter-button']}>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </button>
    </div>
  );
};

export default Counter;
