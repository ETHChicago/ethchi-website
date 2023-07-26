import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Tickets from './pages/Tickets';
import ComingSoon from "./pages/ComingSoon";
import Hackathon from './pages/hackathon/Hackathon';

import links from './utils/links';
import { WagmiConfig } from 'wagmi';
import { wagmiConfig } from './config/wagmiConfig';


function App() {
  return (
    <>  
    <WagmiConfig config={wagmiConfig}>
      <Navbar /> 

      <Routes>
        <Route path={links.sitePaths.home} element={<Home />} />
        <Route path={links.sitePaths.about} element={<About />} />
        <Route path={links.sitePaths.tickets} element={<Tickets />} />
        <Route path={links.sitePaths.comingSoon} element={<ComingSoon />} />
        <Route path={links.sitePaths.hackathon} element={<Hackathon />} />
      </Routes>

      <Footer />
    </WagmiConfig>
    </>
  );
}

export default App;
