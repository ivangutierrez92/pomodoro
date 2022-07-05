import React from 'react';
import styles from '../styles/components/Error.module.scss';
const Error = () => {
  return (
    <div className={styles.Error}>
      <h1 className={styles['Error__title']}>ups, sucedió un error</h1>
    </div>
  );
};

export default Error;
