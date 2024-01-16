import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Tickets from './pages/tickets/Tickets'
import ComingSoon from './pages/comingSoon/ComingSoon'
import Hackathon from './pages/hackathon/Hackathon'
import Winners from './pages/winners/Winners'
import Conference from './pages/conference/Conference'
import Faucet from './pages/faucet/Faucet'
import Showcase from './pages/showcase/Showcase'
import links from './data/links'
import HackerTicketRedirect from './pages/HackerTicketRedirect'
import HolidayCollectibleMint from './pages/holidayCollectibleMint/HolidayCollectibleMint'
import { WagmiConfig } from 'wagmi'
import wagmiConfig from './wagmiConfig'
import { ConnectKitProvider } from 'connectkit'
import Community from './pages/community/Community'

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <ConnectKitProvider>
        <Navbar /> 
        <Routes>
          <Route path={links.sitePaths.home} element={<Home />} />
          <Route path={links.sitePaths.about} element={<About />} />
          <Route path={links.sitePaths.tickets} element={<Tickets />} />
          <Route path={links.sitePaths.comingSoon} element={<ComingSoon />} />
          <Route path={links.sitePaths.hackathon} element={<Hackathon />} />
          <Route path={links.sitePaths.winners} element={<Winners />} />
          <Route path={links.sitePaths.conference} element={<Conference />} />
          <Route path={links.sitePaths.hackerTicketRedirect} element={<HackerTicketRedirect />} />
          <Route path={links.sitePaths.faucet} element={<Faucet />} />
          <Route path={links.sitePaths.showcase} element={<Showcase />} />
          <Route path={links.sitePaths.holidayCollectible} element={<HolidayCollectibleMint />} />
          <Route path={links.sitePaths.community} element={<Community />} />
        </Routes>
        <Footer />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default App;
