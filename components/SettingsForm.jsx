import { Form, Formik } from 'formik';
import React from 'react';
import MyTextInput from './MyTextInput';
import styles from '../styles/components/SettingsForm.module.scss';

const SettingsForm = ({
  sessionNumber,
  breakNumber,
  saveItem,
  started,
  setModalOpened,
  stopTimer,
}) => {
  return (
    <div className={styles.Form}>
      <button className={styles['button--close']} onClick={() => setModalOpened(false)}>
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
            saveItem({ session: values.session * 60, break: values.break * 60 });
            stopTimer();
            setModalOpened(false);
          }
        }}
      >
        <Form>
          <MyTextInput label="Sesión" name="session" type="number" min={1} max={999} />
          <MyTextInput label="Descanso" name="break" type="number" min={1} max={999} />
          <button type="submit" className={styles['button--submit']}>
            Guardar
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SettingsForm;
