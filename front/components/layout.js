// components/Layout.js
import App from './navbar';
import Footer from './footer';
 
const Layout = ({ children }) => {
   
 
  return (
    <div>
      <App/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
