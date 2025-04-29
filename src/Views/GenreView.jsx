import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './GenreView.css';

const GenreView = () => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const { genre_id } = useParams();  
  const page = 1; 
  
  useEffect(() => {
    fetchGenres();
  }, [genre_id, page]);

  const fetchGenres = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${genre_id}&page=${page}`
      );
      setGenres(response.data.results); 
    } catch (err) {
      setError('Failed to load genres');
      console.error(err);
    }
  };

  return (
    <div className="genre-view">
      <h1>Genres</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="genres-container">
        {genres.map((genre) => (
          <div key={genre.id} className="genre-item">
            <a href={`/movies/genre/${genre.id}`}>{genre.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreView;
