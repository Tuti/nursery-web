import styles from './footer.module.css';
export default function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['hours']}>
        <div className={styles['footer-heading']}>Hours:</div>
        <p className={styles['info']}>7:00AM - 5:00PM</p>
      </div>
      <div className={styles['call']}>
        <div className={styles['footer-heading']}>Call:</div>
        <p className={styles['info']}>(123) 456-7890</p>
      </div>
      <div className={styles['email']}>
        <div className={styles['footer-heading']}>Email:</div>
        <p className={styles['info']}>service@angelesnursery.com</p>
      </div>
      <div className={styles['location']}>
        <div className={styles['footer-heading']}>Location:</div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7967.1173898893485!2d-117.26525835551986!3d33.27093650204568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc712d6941b873%3A0x6bb900596952027!2sLa%20Villa%20Sulla%20Collina%20Tropical%20Fruit%20U-Pick%20Orchard!5e0!3m2!1sen!2sus!4v1670868285926!5m2!1sen!2sus"
          className={styles['google-map']}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
}
