import { Route, Routes } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import Movies from './pages/Movies/Movies.jsx';
import TvSeries from './pages/TvSeries/TvSeries.jsx';
import Card from './components/InfoCard/Card.jsx';
import Footer from './components/Footer/Footer.jsx';
import { GET_COLLECTIONS } from './data/homeCollections.jsx';

import 'swiper/css';

function App() {
  const { loading, error, data } = useQuery(GET_COLLECTIONS)

  console.log(data)

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tvSeries' element={<TvSeries />} />
          <Route path='/card/:id' element={<Card />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
