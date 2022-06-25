import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import SideMenu from '../components/SideMenu';
import '../styles/globals.css';

function MyApp({ session, Component, pageProps }) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
