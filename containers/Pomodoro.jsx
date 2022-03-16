import React, { useState, useEffect } from 'react';
import Control from '../components/Control';
import Counter from '../components/Counter';

const Pomodoro = () => {
  const [sessionNumber, setSessionNumber] = useState(25);
  const [breakNumber, setBreakNumber] = useState(5);
  const [isSession, setIsSession] = useState(true);
  const [started, setStarted] = useState(false);
  const [minutes, setMinutes] = useState(sessionNumber);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (started) {
      const interval = setInterval(counterInterval, 1000);
    }
    return () => clearInterval(interval);
  }, [started, seconds]);

  const toggleIsSession = () => {
    setMinutes(() => (isSession ? breakNumber : sessionNumber));
    setSeconds(0);
    setIsSession(session => !session);
  };

  const onClickSessionMinus = () => {
    const number = sessionNumber > 1 ? sessionNumber - 1 : sessionNumber;
    setSessionNumber(number);
    if (isSession) {
      setMinutes(number);
      setSeconds(0);
    }
  };

  const onClickSessionPlus = () => {
    const number = sessionNumber < 120 ? sessionNumber + 1 : sessionNumber;
    setSessionNumber(number);
    if (isSession) {
        setMinutes(number);
        setSeconds(0);
      }
  };

  const onClickBreakMinus = () => {
    const number = breakNumber > 1 ? breakNumber - 1 : breakNumber;
    setBreakNumber(number);
    if (!isSession) {
        setMinutes(number);
        setSeconds(0);
      }
  };

  const onClickBreakPlus = () => {
    const number = breakNumber < 120 ? breakNumber + 1 : breakNumber;
    setBreakNumber(number);
    if (!isSession) {
        setMinutes(number);
        setSeconds(0);
      }
  };

  const counterInterval = () => {
    if (minutes === 0 && seconds === 0) {
      setMinutes(() => (isSession ? breakNumber - 1 : sessionNumber - 1));
      setSeconds(59);
      setIsSession(session => !session);
    } else if (seconds === 0) {
      setMinutes(state => state - 1);
      setSeconds(59);
    } else {
      setSeconds(state => state - 1);
    }
  };

  return (
    <div>
      <div>
        <Control
          label="Sesión"
          controlNumber={sessionNumber}
          setControlNumber={setSessionNumber}
          disabled={started}
          onClickMinus={onClickSessionMinus}
          onClickPlus={onClickSessionPlus}
        />
        <Control
          label="Descanso"
          controlNumber={breakNumber}
          setControlNumber={setBreakNumber}
          disabled={started}
          onClickMinus={onClickBreakMinus}
          onClickPlus={onClickBreakPlus}
        />
        <div>
          <Counter
            minutes={minutes}
            seconds={seconds}
            isSession={isSession}
            setStarted={setStarted}
          />
        </div>
        <button onClick={toggleIsSession} disabled={started}>
          {isSession ? '¡Descansar!' : '¡Trabajar!'}
        </button>
      </div>
    </div>
  );
};

export default Pomodoro;
