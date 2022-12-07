import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';
import bgimage from '../images/plants.jpg';
import ImageGallery from 'react-image-gallery';
import ContactForm from '../components/contact-form';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles['container']}>
      <Head>
        <title>Angeles Nursery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles['main']}>
        <Navbar
          variant="light"
          className={styles['navbar']}
          expand="lg"
          fixed="top"
        >
          <Container>
            <Navbar.Brand>Angeles Nursery</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link
                  onClick={() => {
                    router.push('/');
                  }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    router.push('photo-gallery');
                  }}
                >
                  Photo Gallery
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    router.push('contact');
                  }}
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className={styles['image-wrapper']}>
          <Image
            className={styles['temp']}
            src={bgimage}
            alt="image of plants used for background"
            priority
          ></Image>
        </div>
        <div className={styles['text']}>
          <h2 className={styles['sub-heading']}>Welcome</h2>
          <p>
            Based in Bonsall CA, We are a family owned and operated plant
            nursery specializing in commerical and residential plant sales and
            are eager to help with any of your plant needs.
          </p>
          <h2 className={styles['sub-heading']}>Locally Sourced</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h2 className={styles['sub-heading']}>Direct to Consumer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <ImageGallery></ImageGallery>
        <ContactForm />
      </main>
    </div>
  );
}
