import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Layout = () => {
  // useLocation() gibt uns den aktuellen Pfad zurück
  const location = useLocation();
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* Footer wird nur angezeigt, wenn nicht auf Home */}
      {location.pathname !== '/' && <Footer />}
    </>
  );
};

export default Layout;
