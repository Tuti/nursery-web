import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';
import bgimage from '../images/plants-6.jpg';
import p_image3 from '../images/plants-3.jpg';
import p_image1 from '../images/plants-4.jpg';
import p_image2 from '../images/plants-5.jpg';
import { Carousel } from 'react-bootstrap';
import CustomNavbar from '../components/custom-navbar';

export default function Home() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Angeles Nursery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles['main']}>
        <CustomNavbar />
        <Image
          className={styles['image']}
          src={bgimage}
          alt="image of plants used for background"
          priority
        ></Image>
        <div className={styles['text']}>
          <div className={styles['text-item']}>
            <h2 className={styles['sub-heading']}>Welcome</h2>
            <p>
              Based in Bonsall CA, we are a family owned and operated plant
              nursery specializing in commerical and residential plant sales and
              are eager to help with any of your plant needs.
            </p>
          </div>
          <div className={styles['text-item']}>
            <h2 className={styles['sub-heading']}>Locally Sourced</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={styles['text-item']}>
            <h2 className={styles['sub-heading']}>Direct to Consumer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <p style={{ marginTop: '2rem', marginBottom: '0' }}>
            {' '}
            We invite you to come visit The Angeles Nursery for your plant
            needs!
          </p>
        </div>
        <Carousel>
          <Carousel.Item>
            <Image
              className={styles['image']}
              src={p_image1}
              alt="carousel image of plants"
              priority
            ></Image>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className={styles['image']}
              src={p_image2}
              alt="carousel image of plants"
              priority
            ></Image>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className={styles['image']}
              src={p_image3}
              alt="carousel image of plants"
              priority
            ></Image>
          </Carousel.Item>
        </Carousel>
      </main>
      <footer className={styles['footer']}>
        <div className={styles['location']}>
          <div className={styles['footer-heading']}>Location:</div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7967.1173898893485!2d-117.26525835551986!3d33.27093650204568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc712d6941b873%3A0x6bb900596952027!2sLa%20Villa%20Sulla%20Collina%20Tropical%20Fruit%20U-Pick%20Orchard!5e0!3m2!1sen!2sus!4v1670868285926!5m2!1sen!2sus"
            className={styles['google-map']}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles['info-container']}>
          <div className={styles['hours']}>
            <div className={styles['footer-heading']}>Hours:</div>
            <p className={styles['info']}>7:00AM - 5:00PM</p>
          </div>
          <div className={styles['contact']}>
            <div className={styles['footer-heading']}>Contact Us:</div>
            <p className={styles['info']}>Phone: (760) 123-4567</p>
            <p className={styles['info']}>Email: service@angelesnursery.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
