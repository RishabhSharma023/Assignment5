import './Feature.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Featured() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMovies() {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`);
            setMovies(response.data.results.slice(0, 3)); // Get only the first 3 movies
        }

        getMovies();
    }
    , []);

    return (
        <div className="featured-container">
            <h1>Featured Movies</h1>
            <div className="featured-movie">
                {movies.map(movie => (
                    <div className="movie-card" key={movie.id}>
                        <h2>{movie.title}</h2>
                        <img 
                        className="movie-poster"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Featured;