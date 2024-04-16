import { Route, Routes } from 'react-router-dom';
import { BrowserRouter, MobileView, isBrowser, isMobile } from 'react-device-detect';

import { Swiper, SwiperSlide } from 'swiper/react';

import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import MobilePage from './mobile/MobilePage.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
