import { useField } from 'formik';
import React from 'react';
import styles from '../styles/components/MyTextInput.module.scss';
const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className={styles.MyTextInput}>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className={styles['MyTextInput__input']} {...field} {...props} />
      </div>
    </>
  );
};

export default MyTextInput;
