import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Architecture from './components/Architecture';
import Entities from './components/Entities';
import Solutions from './components/Solutions';
import SkillAgents from './components/SkillAgents';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-mv-950">
      <Navbar />
      <Hero />
      <Architecture />
      <Entities />
      <Solutions />
      <SkillAgents />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
