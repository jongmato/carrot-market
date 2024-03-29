import '../styles/globals.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <div className="mx-auto w-full max-w-xl">
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
