import styles from '../styles/Contact.module.css';
import Head from 'next/head';
import CustomNavbar from '../components/custom-navbar';
import { Button } from 'react-bootstrap';
import Footer from '../components/footer';
export default function Contact() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles['main']}>
        <CustomNavbar />

        <div className={styles['separator']}></div>
        <h2 className={styles['heading']}>Contact Us: </h2>
        <form className={styles['contact-form']}>
          <input
            className={`${styles['form-input']}`}
            type={'text'}
            placeholder="Name"
          />
          <input
            className={`${styles['form-input']}`}
            type={'email'}
            placeholder="Email"
          />
          <textarea
            className={`${styles['message']} ${styles['form-input']}`}
            placeholder="Your message"
            rows={8}
          />
          <Button className={`${styles['submit']} ${styles['form-input']}`}>
            Submit
          </Button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
