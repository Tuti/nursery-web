import '../styles/globals.scss';
import { Roboto, Fira_Sans, Sanchez } from '@next/font/google';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
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

const sanchez = Sanchez({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#0e3f37',
    },
    secondary: {
      main: '#cf985f',
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div className={`${sanchez.className}`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
