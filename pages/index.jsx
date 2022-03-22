import Head from 'next/head';
import Footer from '../components/Footer';
import Pomodoro from '../containers/Pomodoro';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pomodoro</title>
        <meta name="description" content="App Pomodoro para mejorar tu productividad!" />
      </Head>
      <main className={styles.container}>
        <Pomodoro />
        <section className={styles.info}>
          <h2 className={styles['info__title']}>
            Pomodoro, una técnica de estudio y concentración
          </h2>
          <article className={styles['section-info']}>
            <h3 className={styles['section-info__title']}>¿Qué es pomodoro?</h3>
            <p>
              Pomodoro es una técnica de gestión de tiempo creada por Francesco Cirillo, que
              consiste en separar el tiempo de trabajo en intervalos de tiempo, generalmente de 25
              minutos, y separados por un tiempo de descanso, en pos de aumentar la productividad y
              concentración. Además de eso, Pomodoro significa tomate en italiano (basado en un
              temporizador de cocina que el autor de esta técnica tenía).
            </p>
          </article>
          <article className={styles['section-info']}>
            <h3 className={styles['section-info__title']}>¿Qué puede hacer esta aplicacion?</h3>
            <p>
              La aplicación ayuda a la ejecución de la técnica Pomodoro, pudiendo alternar entre la
              sesiónd de trabajo y el descanso. Además, se puede configurar cuánto dura la sesión y
              el descanso. Finalmente, la página puede ser instalada como aplicación.
            </p>
          </article>
          <article className={styles['section-info']}>
            <h3 className={styles['section-info__title']}>¿Por qué esta aplicación?</h3>
            <p>
              Cuando estaba aprendiendo desarrollo web, una de las primeras aplicaciones que tuve
              que hacer fue la de Pomodoro. Ahora que tengo algo más de experiencia, decidí que
              podía mejorar esa aplicación y generarle algo más de valor, para poder colocarla con
              orgullo en mi portafolio web. También quiero destacar la genial aplicación{' '}
              <a href="https://pomofocus.io/" target="_blank" rel="noreferrer">
                pomofocus
              </a>
              , de Yuya Uzu, por demostrar a lo que una aplicación como esta debe aspirar.
            </p>
          </article>
        </section>
        <Footer />
      </main>
    </>
  );
}
