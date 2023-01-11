import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/footer/footer';
import CustomNavbar from '../components/custom-navbar/custom-navbar';
import p_image1 from '../public/plants-6.jpg';
import cactus from '../public/cactus_plant.png';

export default function Home() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Angeles Nursery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomNavbar />
      <main className={styles['main']}>
        <div className={styles['center-content']}>
          <div className={styles['hero-section']}>
            <div className={styles['hero-left']}>
              <h1>The One</h1>
              <h1>Stop For</h1>
              <h1>Plants</h1>
            </div>
            <div className={styles['hero-right']}>
              <Image
                className={styles['hero-image']}
                alt="hero image"
                src={cactus}
                priority
              ></Image>
            </div>
          </div>
          <div className={styles['text-container']}>
            <div className={`${styles['text-item']}`}>
              <h2 className={styles['sub-heading']}>Welcome</h2>
              <p>
                Based in Bonsall CA, we are a family owned and operated plant
                nursery specializing in commerical and residential plant sales
                and are eager to help with any of your plant needs.
              </p>
              <Image
                className={styles['image']}
                alt="welcome image"
                src={p_image1}
              ></Image>
            </div>
            <div className={styles['text-item-alt']}>
              <h2 className={styles['sub-heading-alt']}>Locally Sourced</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Image
                className={styles['image-alt']}
                alt="welcome image"
                src={p_image1}
              ></Image>
            </div>
            <div className={styles['text-item']}>
              <h2 className={styles['sub-heading']}>Direct to Consumer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Image
                className={styles['image']}
                alt="welcome image"
                src={p_image1}
              ></Image>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
