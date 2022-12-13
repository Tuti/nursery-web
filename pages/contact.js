import styles from '../styles/Contact.module.css';
import Head from 'next/head';
export default function Contact() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Angeles Nursery Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles['main']}></main>
    </div>
  );
}
