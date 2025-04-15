import './App.css';
import Header from './Components/Header.jsx';
import Hero from './Components/Hero.jsx';
import Featured from './Components/Feature.jsx';
import Footer from './Components/Footer.jsx';

/*function App() {
    return (
        <div className="app">
            <Header />
            <Hero />
            <Featured />
            <Footer />
        </div>
    );
}

export default App;*/

import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`);
      setMovies(response.data.results);
    }
  
    getData();
  }, []);

  return (
    <div className="movie-container">
            <Header />
            <Hero />
            <Featured />
            <Footer />
      {movies && movies.map(movie => (
        <div className="movie-card" key={movie.id}>
          <h1>{`${movie.title}`}</h1>
          <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.id}`} />
        </div>
      ))}
    </div>

    
  );
}

export default App;