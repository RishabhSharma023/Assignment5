import './App.css';
import Featured from './Components/Feature.jsx';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';
import Hero from './Components/Hero.jsx';

function App() {
    return (
        <div className="App">
            <div className="header">
                <div className="title">Amazin' Prime Video</div>
                <Header />
            </div>
            <Hero />
            <div className="featured-section">
                <Featured />
            </div>
            <Footer />
        </div>
    );
}

export default App;