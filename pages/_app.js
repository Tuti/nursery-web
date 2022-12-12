import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Roboto, Fira_Sans, Playfair_Display } from '@next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const fira_sans = Fira_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${fira_sans} ${roboto.className}`}>
      <Component {...pageProps} />;
    </main>
  );
}
