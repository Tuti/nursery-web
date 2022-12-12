import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';
import bgimage from '../images/plants-6.jpg';
import p_image3 from '../images/plants-3.jpg';
import p_image1 from '../images/plants-4.jpg';
import p_image2 from '../images/plants-5.jpg';
import mapboxgl, { Map } from 'mapbox-gl';
import ContactForm from '../components/contact-form';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useRef, useState, useEffect } from 'react';

mapboxgl.accessToken =
  'pk.eyJ1IjoidHV0aTExNSIsImEiOiJjbGJmbjYzZzkwN254M3JvYjJndmFxNmV3In0.MKp7pyU7wE_Tz-9mYMY0gQ';

export default function Home() {
  const router = useRouter();

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-117.261);
  const [lat, setLat] = useState(33.268);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });
  });

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
            className={styles['image']}
            src={bgimage}
            alt="image of plants used for background"
            priority
          ></Image>
        </div>
        <div className={styles['text']}>
          <h2 className={styles['sub-heading']}>Welcome</h2>
          <p>
            Based in Bonsall CA, we are a family owned and operated plant
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
        <ContactForm />
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
        <div ref={mapContainer} className={styles['map-container']} />
      </main>
    </div>
  );
}
