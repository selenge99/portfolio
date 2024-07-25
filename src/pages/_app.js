import "@/styles/globals.css";
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
