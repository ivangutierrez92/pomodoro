import React from 'react';
import styles from '../styles/containers/Modal.module.scss'

const Modal = ({ children }) => {
  return <div className={styles.Modal}>{children}</div>;
};

export default Modal;
