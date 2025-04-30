import "./GenreView.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Define all genres with their IDs
const GENRES = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 14, name: "Fantasy" },
    { id: 878, name: "Science Fiction" },
    { id: 10752, name: "War" },
    { id: 35, name: "Comedy" },
    { id: 9648, name: "Mystery" },
    { id: 37, name: "Western" },
    { id: 10751, name: "Family" }
];

function GenreView() {
    const [selectedGenre, setSelectedGenre] = useState(28);
    const [fetchingMovies, setFetchingMovies] = useState(true);
    const [movies, setMovies] = useState([]);
    const [maxPages, setMaxPages] = useState(1);
    const [page, setPage] = useState(1);
    const navigate = useNavigate(); // For navigation

    useEffect(() => {
        setPage(1); // Reset to first page on genre change
    }, [selectedGenre]);

    useEffect(() => {
        (async function getMovies() {
            setFetchingMovies(true);
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${selectedGenre}&api_key=${import.meta.env.VITE_TMDB_KEY}`
                );
                setMovies(response.data.results);
                setMaxPages(response.data.total_pages);
            } catch (error) {
                console.error("ERROR in fetching movies", error);
            } finally {
                setFetchingMovies(false);
            }
        })();
    }, [selectedGenre, page]);

    return (
        <div className="genre-layout">
            <div className="genre-sidebar">
                <h2>Genres</h2>
                <ul className="genre-list">
                    {GENRES.map((genre) => (
                        <li key={genre.id}>
                            <button
                                className={`genre-button ${selectedGenre === genre.id ? "active" : ""}`}
                                onClick={() => setSelectedGenre(genre.id)}
                            >
                                {genre.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="genre-main">
                {fetchingMovies ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <div className="genre-posters">
                            {movies.map((movie) => (
                                <div key={movie.id} className="moviePoster">
                                    <div
                                        className="posterContainer"
                                        onClick={() => navigate(`/movies/${movie.id}`)} // Navigate to DetailView
                                    >
                                        <img
                                            src={
                                                movie.poster_path
                                                    ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
                                                    : `https://placehold.co/300x450?text=Movie+Poster+Unavailable`
                                            }
                                            alt={movie.title}
                                        />
                                    </div>
                                    <h1 className="movieTitle">{movie.title}</h1>
                                </div>
                            ))}
                        </div>

                        <div className="pageSelector">
                            <button
                                className="prevButton"
                                onClick={() =>
                                    page > 1
                                        ? setPage(page - 1)
                                        : alert("You are on the first page, there is no previous page.")
                                }
                            >
                                Previous
                            </button>
                            <input
                                className="pageNumberBox"
                                type="number"
                                min={1}
                                max={maxPages}
                                value={page}
                                onChange={(event) => {
                                    const val = Number(event.target.value);
                                    if (val >= 1 && val <= maxPages) {
                                        setPage(val);
                                    } else {
                                        alert("Page does not exist");
                                    }
                                }}
                            />
                            <button
                                className="nextButton"
                                onClick={() =>
                                    page < maxPages
                                        ? setPage(page + 1)
                                        : alert("You are on the last page, there is no next page.")
                                }
                            >
                                Next
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default GenreView;