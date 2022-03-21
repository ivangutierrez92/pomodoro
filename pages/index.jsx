import Head from 'next/head';
import Image from 'next/image';
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
        <section></section>
      </main>
    </>
  );
}
