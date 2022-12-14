import styles from '../styles/PhotoGallery.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/footer';
import pl1 from '../public/plants-1.jpg';
import pl2 from '../public/plants-2.jpg';
import pl3 from '../public/plants-3.jpg';
import pl4 from '../public/plants-4.jpg';
import pl5 from '../public/plants-5.jpg';
import pl6 from '../public/plants-6.jpg';
import pl7 from '../public/plants-7.jpg';
import pl8 from '../public/plants-8.jpg';
import pl9 from '../public/plants-9.jpg';
import pl10 from '../public/plants-10.jpg';
import pl11 from '../public/plants-11.jpg';
import pl12 from '../public/plants-12.jpg';
import pl13 from '../public/plants-13.jpg';
import pl14 from '../public/plants-14.jpg';
import CustomNavbar from '../components/custom-navbar';

export default function PhotoGallery() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Photo Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomNavbar />
      <main className={styles['main']}>
        <div className={styles['separator']}></div>
        <div className={styles['gallery']}>
          <Image
            className={styles['image']}
            src={pl1}
            alt="carousel image of plants"
            priority
          ></Image>
          <Image
            className={styles['image']}
            src={pl2}
            alt="carousel image of plants"
            priority
          ></Image>
          <Image
            className={styles['image']}
            src={pl3}
            alt="carousel image of plants"
            priority
          ></Image>
          <Image
            className={styles['image']}
            src={pl4}
            alt="carousel image of plants"
            loading="lazy"
          ></Image>
          <Image
            className={styles['image']}
            src={pl5}
            alt="carousel image of plants"
            loading="lazy"
          ></Image>
          <Image
            className={styles['image']}
            src={pl6}
            alt="carousel image of plants"
            loading="lazy"
          ></Image>
          <Image
            className={styles['image']}
            src={pl7}
            alt="carousel image of plants"
            loading="lazy"
          ></Image>
          <Image
            className={styles['image']}
            src={pl8}
            alt="carousel image of plants"
            loading="lazy"
          ></Image>
          <Image
            className={styles['image']}
            src={pl9}
            alt="carousel image of plants"
            loading="lazy"
          ></Image>
          <Image
            className={styles['image']}
            src={pl10}
            alt="carousel image of plants"
            loading="lazy"
          ></Image>
          <Image
            className={styles['image']}
            src={pl11}
            alt="carousel image of plants"
            loading="lazy"
          ></Image>
          <Image
            className={styles['image']}
            src={pl12}
            alt="carousel image of plants"
            loading="lazy"
          ></Image>
          <Image
            className={styles['image']}
            src={pl13}
            alt="carousel image of plants"
            loading="lazy"
          ></Image>
          <Image
            className={styles['image']}
            src={pl14}
            alt="carousel image of plants"
            loading="lazy"
          ></Image>
        </div>
      </main>
      <Footer />
    </div>
  );
}
