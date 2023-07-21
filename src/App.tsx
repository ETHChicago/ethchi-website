import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Tickets from './pages/Tickets';
import ComingSoon from './pages/ComingSoon';
import links from './utils/links';

function App() {
  return (
    <>  
      <Navbar /> 

      <Routes>
        <Route path={links.sitePaths.home} element={<Home />} />
        <Route path={links.sitePaths.about} element={<About />} />
        <Route path={links.sitePaths.tickets} element={<Tickets />} />
        <Route path={links.sitePaths.comingSoon} element={<ComingSoon />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
