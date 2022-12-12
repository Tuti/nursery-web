import styles from '../styles/components/contact-form.module.css';

export default function ContactForm() {
  return (
    <div className={styles['container']}>
      <h2>Get in Touch</h2>
      <form className={styles['contact-form']}>
        <input placeholder="Your Name" />
        <input type={'email'} placeholder="Email" />
        <input placeholder="Subject" />
      </form>
    </div>
  );
}
