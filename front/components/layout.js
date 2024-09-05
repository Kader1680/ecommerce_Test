// components/Layout.js
import App from './navbar';
import Footer from './footer';
import { useRouter } from 'next/router';
import { isRtl } from '../utils/directions';

const Layout = ({ children }) => {
  const { locale } = useRouter();
  const isRtlLayout = isRtl(locale);

  return (
    <div style={{ direction: isRtlLayout ? 'rtl' : 'ltr' }}>
      <App />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
