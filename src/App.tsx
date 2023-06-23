import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Tickets from './pages/Tickets';

function App() {
  return (
    <>  
      <Navbar /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
