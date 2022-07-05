import React from 'react';
import styles from '../styles/components/Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.Loading}>
      <h1 className={styles['Loading__title']}>Cargando...</h1>
    </div>
  );
};

export default Loading;
