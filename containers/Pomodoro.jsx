import React, { useState, useEffect, useRef } from 'react';
import Counter from '../components/Counter';
import styles from '../styles/Pomodoro.module.css';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Loading from '../components/Loading';
import SettingsForm from '../components/SettingsForm';
import Modal from './Modal';
import Error from '../components/Error';

const Pomodoro = () => {
  const { item, saveItem, loading, error } = useLocalStorage('pomodoro-times', {
    session: 25,
    break: 5,
  });

  const sessionNumber = item?.session;
  const breakNumber = item?.break;

  const [isSession, setIsSession] = useState(true);
  const [started, setStarted] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [formModalOpened, setFormModalOpened] = useState(false);

  const alarmSound = useRef(null);

  useEffect(() => {
    setMinutes(isSession ? item?.session : item?.break);
    setSeconds(0);
  }, [item]);

  useEffect(() => {
    if (started) {
      const interval = setInterval(counterInterval, 1000);
    }
    return () => clearInterval(interval);
  }, [started, seconds]);

  const counterInterval = () => {
    if (minutes === 0 && seconds === 0) {
      setMinutes(() => (isSession ? breakNumber - 1 : sessionNumber - 1));
      setSeconds(59);
      alarmSound.current.play();
      setIsSession(session => !session);
    } else if (seconds === 0) {
      setMinutes(state => state - 1);
      setSeconds(59);
    } else {
      setSeconds(state => state - 1);
    }
  };

  const toggleIsSession = () => {
    if (!started || confirm('Esta acción reiniciará el contador ¿Desea continuar?')) {
      setMinutes(isSession ? breakNumber : sessionNumber);
      setSeconds(0);
      setIsSession(session => !session);
      setStarted(false);
    }
  };

  const toggleFormModal = () => {
    setFormModalOpened(true);
  };

  const containerColor = isSession
    ? styles['session_background_primary']
    : styles['break_background_primary'];
  const elementColor = isSession
    ? styles['session_background_secondary']
    : styles['break_background_secondary'];

  return (
    <>
      {(loading || !item) && !error && <Loading />}
      {error && <Error />}
      {!error && !loading && !!item && (
        <div className={`${styles.container} ${styles['fade-transition']} ${containerColor}`}>
          <nav className={styles.navbar}>
            <button
              className={`${styles['options-button']}  ${styles['fade-transition']} ${elementColor}`}
              onClick={toggleFormModal}
            >
              <FontAwesomeIcon icon={faGear} />
            </button>
          </nav>
          <h1 className={styles['main-title']}>Pomodoro</h1>
          <div className={styles['pomodoro-container']}>
            <div className={styles['tabs-container']}>
              <button
                onClick={toggleIsSession}
                disabled={isSession}
                className={`${styles.tab} ${isSession && styles['session_background_tertiary']} ${
                  styles['fade-transition']
                }`}
              >
                Sesión
              </button>
              <button
                onClick={toggleIsSession}
                disabled={!isSession}
                className={`${styles.tab} ${!isSession && styles['break_background_tertiary']} ${
                  styles['fade-transition']
                } `}
              >
                Descanso
              </button>
            </div>
            <div>
              <Counter
                minutes={minutes}
                seconds={seconds}
                isSession={isSession}
                setStarted={setStarted}
              />
            </div>
            <audio ref={alarmSound}>
              <source src="/sounds/alarm-clock-01.mp3" />
            </audio>
          </div>
        </div>
      )}

      {formModalOpened ? (
        <Modal>
          <SettingsForm
            sessionNumber={sessionNumber}
            breakNumber={breakNumber}
            saveItem={saveItem}
            setSeconds={setSeconds}
            setModalOpened={setFormModalOpened}
            started={started}
            setStarted={setStarted}
          />
        </Modal>
      ) : null}
    </>
  );
};

export default Pomodoro;
