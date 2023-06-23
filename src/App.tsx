import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <>  
      <Navbar /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
