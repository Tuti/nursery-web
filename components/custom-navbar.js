import styles from '../styles/components/navbar.module.css';
import Image from 'next/image';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useRouter } from 'next/router';
import TreeIcon from './tree-icon';

export default function CustomNavbar() {
  const router = useRouter();
  return (
    <Navbar
      variant="light"
      className={styles['navbar']}
      expand="lg"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/">
          <Image
            alt=""
            src="/tree.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Angeles Nursery{' '}
        </Navbar.Brand>
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
  );
}
