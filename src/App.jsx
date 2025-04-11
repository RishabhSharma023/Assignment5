import './App.css';
import Header from './Components/Header.jsx';
import Hero from './Components/Hero.jsx';
import Featured from './Components/Feature.jsx';
import Footer from './Components/Footer.jsx';

function App() {
    return (
        <div className="app">
            <Header />
            <Hero />
            <Featured />
            <Footer />
        </div>
    );
}

export default App;