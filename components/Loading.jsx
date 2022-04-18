import React from 'react';
import styles from '../styles/Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.Loading}>
      <h1 className={styles['Loading__title']}>Cargando...</h1>
    </div>
  );
};

export default Loading;
