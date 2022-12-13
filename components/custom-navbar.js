import styles from '../styles/components/navbar.module.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useRouter } from 'next/router';

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
  );
}
