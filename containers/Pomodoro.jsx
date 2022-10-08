import React, { useState, useEffect, useRef } from 'react';
import Counter from '../components/Counter';
import styles from '../styles/containers/Pomodoro.module.scss';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Loading from '../components/Loading';
import SettingsForm from '../components/SettingsForm';
import Modal from './Modal';
import Error from '../components/Error';

const Pomodoro = () => {
  const { item, saveItem, loading, error } = useLocalStorage('pomodoro-times', {
    //Initial values if there isn't data in local storage
    session: 25 * 60,
    break: 5 * 60,
  });

  const normalizeStorageValues = mode => {
    //if some of the values in storage value is less or more than the min and max values, change to the min or max value
    if (!!item) {
      return item[mode] < 60 ? 60 : item[mode] > 999 * 60 ? 999 * 60 : item[mode];
    }
  };

  const sessionNumber = normalizeStorageValues('session');
  const breakNumber = normalizeStorageValues('break');

  const [isSession, setIsSession] = useState(true);
  const [started, setStarted] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [formModalOpened, setFormModalOpened] = useState(false);
  const alarmSound = useRef(null);
  const timer = useRef('');

  useEffect(() => {
    setSeconds(normalizeStorageValues(isSession ? 'session' : 'break'));
  }, [item]);

  const startOrStop = () => {
    if (started) {
      stopTimer();
    } else {
      timer.current = setInterval(counterInterval, 1000);
      setStarted(true);
    }
  };

  const counterInterval = () => {
    setSeconds(prev => {
      if (prev > 0) {
        return prev - 1;
      } else {
        setSeconds(() => (isSession ? breakNumber : sessionNumber));
        alarmSound.current.play();
        setIsSession(session => !session);
        return 0;
      }
    });
  };

  const stopTimer = () => {
    clearInterval(timer.current);
    setStarted(false);
  };

  const toggleIsSession = () => {
    if (
      (!started && seconds == isSession ? sessionNumber : breakNumber) ||
      confirm('Esta acción reiniciará el contador ¿Desea continuar?')
    ) {
      setSeconds(isSession ? breakNumber : sessionNumber);
      setIsSession(session => !session);
      stopTimer();
    }
  };

  const openFormModal = () => {
    setFormModalOpened(true);
  };

  const containerColor = isSession ? styles['session__background'] : styles['break__background'];
  const elementColor = isSession
    ? styles['session__background--light']
    : styles['break__background--light'];

  return (
    <>
      {(loading || !item) && !error && <Loading />}
      {error && <Error />}
      {!error && !loading && !!item && (
        <div className={`${styles.Main} ${styles.fadeTransition} ${containerColor}`}>
          <nav className={styles.navbar}>
            <button
              className={`${styles['navbar__button--options']}  ${styles.fadeTransition} ${elementColor}`}
              onClick={openFormModal}
            >
              <FontAwesomeIcon icon={faGear} />
            </button>
          </nav>
          <h1 className={styles['Main__title']}>Pomodoro</h1>
          <div className={styles.Pomodoro}>
            <div className={styles.Tabs}>
              <button
                onClick={toggleIsSession}
                disabled={isSession}
                className={`${styles.tab} ${isSession && styles['session__background--dark']} ${
                  styles.fadeTransition
                }`}
              >
                Sesión
              </button>
              <button
                onClick={toggleIsSession}
                disabled={!isSession}
                className={`${styles.tab} ${!isSession && styles['break__background--dark']} ${
                  styles.fadeTransition
                } `}
              >
                Descanso
              </button>
            </div>
            <div>
              <Counter
                minutes={Math.floor(seconds / 60)}
                seconds={seconds % 60}
                isSession={isSession}
                startOrStop={startOrStop}
              />
            </div>
            <audio ref={alarmSound}>
              <source src="sounds/alarm-clock-01.mp3" />
            </audio>
          </div>
        </div>
      )}

      {formModalOpened ? (
        <Modal>
          <SettingsForm
            sessionNumber={Math.floor(sessionNumber / 60)}
            breakNumber={Math.floor(breakNumber / 60)}
            saveItem={saveItem}
            setSeconds={setSeconds}
            setModalOpened={setFormModalOpened}
            started={started}
            setStarted={setStarted}
            stopTimer={stopTimer}
          />
        </Modal>
      ) : null}
    </>
  );
};

export default Pomodoro;
