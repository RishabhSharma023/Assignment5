import './App.css';
import Header from './Components/Header.jsx';
import Hero from './Components/Hero.jsx';
import Feature from './Components/Feature.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <div className="app">
        <Feature />
        <Footer />
        <Header />
        <Hero />
    </div>
  )
  ;
}

export default App;