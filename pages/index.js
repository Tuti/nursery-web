import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import Footer from '../components/footer';
import CustomNavbar from '../components/custom-navbar';
import bgimage from '../public/plants-6.jpg';
import p_image1 from '../public/plants-4.jpg';
import p_image2 from '../public/plants-5.jpg';
import p_image3 from '../public/plants-3.jpg';

export default function Home() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Angeles Nursery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomNavbar />
      <main className={styles['main']}>
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

          <div className={styles['text-item']}>
            <p style={{ marginTop: '0', marginBottom: '0' }}>
              We invite you to come visit The Angeles Nursery for your plant
              needs!
            </p>
          </div>
        </div>
        <div className={styles['carousel-wrapper']}>
          <Carousel className={styles['bs-carousel']}>
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
