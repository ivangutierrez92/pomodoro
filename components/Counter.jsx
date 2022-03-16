import React from 'react';

const Counter = ({ minutes, seconds, setStarted, isSession }) => {
  const onToggleStarted = () => {
    setStarted(started => !started);
  };

  return (
    <div>
      <button type="button" onClick={onToggleStarted}>
        <p>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
        <p>{isSession ? 'Sesión' : 'Descanso'}</p>
      </button>
    </div>
  );
};

export default Counter;
