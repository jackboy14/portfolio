import About from './components/About';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Experiences/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;



