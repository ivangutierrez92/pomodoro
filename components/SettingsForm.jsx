import { Form, Formik } from 'formik';
import React from 'react';
import MyTextInput from './MyTextInput';
import styles from '../styles/SettingsForm.module.css';

const SettingsForm = ({ sessionNumber, breakNumber, saveItem, started, setStarted, setModalOpened }) => {
  return (
      <div className={styles['form-container']}>
        <button className={styles['button-close']} onClick={() => setModalOpened(false)}>
          X
        </button>
        <Formik
          initialValues={{
            session: sessionNumber,
            break: breakNumber,
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            if (!started || confirm('Esta acción reiniciará el contador ¿Desea continuar?')) {
              setStarted(false);
              saveItem({ session: values.session, break: values.break });
              setModalOpened(false);
            }
          }}
        >
          <Form>
            <MyTextInput label="Sesión" name="session" type="number" min={1} max={999} />
            <MyTextInput label="Descanso" name="break" type="number" min={1} max={999} />
            <button type="submit" className={styles['submit-button']}>
              Guardar
            </button>
          </Form>
        </Formik>
      </div>
  );
};

export default SettingsForm;
