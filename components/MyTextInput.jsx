import { useField } from 'formik';
import React from 'react';
import styles from '../styles/MyTextInput.module.css';
const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className={styles.container}>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className={styles['text-input']} {...field} {...props} />
      </div>
    </>
  );
};

export default MyTextInput;
