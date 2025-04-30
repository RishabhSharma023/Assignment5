import "./DetailView.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function DetailView({ movieId: propMovieId, backToGenre, clickedFromFeature }) {
    const navigate = useNavigate();
    const params = useParams();
    const [movie, setMovie] = useState(null); // Start with null
    const [director, setDirector] = useState(null); // Store the director's name
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const movieId = propMovieId || params.movieId; // Use prop or URL param

    useEffect(() => {
        async function getMovie() {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_TMDB_KEY}&append_to_response=credits,videos`
                );
                setMovie(response.data);

                // Extract the director from the crew array
                const directorInfo = response.data.credits.crew.find(
                    (crewMember) => crewMember.job === "Director"
                );
                setDirector(directorInfo ? directorInfo.name : "Unknown");
            } catch (error) {
                console.error("Error fetching movie details:", error);
            } finally {
                setIsLoading(false);
            }
        }

        if (movieId) {
            getMovie();
        }
    }, [movieId]);

    if (isLoading) {
        return <div className="movieDetails">Loading...</div>;
    }

    if (!movie) {
        return <div className="movieDetails">Movie details not available.</div>;
    }

    return (
        <div className="movieDetails">
            <img
                id="inDetail"
                className="moviePoster"
                src={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
                        : `https://placehold.co/400x600?text=Movie+Poster+Unavailable`
                }
                alt={movie.original_title || "Movie Poster"}
            />
            <div className="detail-info">
                <h1>{movie.original_title}</h1>
                <p>
                    <span className="info-header">Description:</span>
                    <span className="info-content">{movie.overview || "No description available."}</span>
                </p>
                <p>
                    <span className="info-header">Release Date:</span>
                    <span className="info-content">{movie.release_date || "N/A"}</span>
                </p>
                <p>
                    <span className="info-header">Runtime:</span>
                    <span className="info-content">{movie.runtime ? `${movie.runtime} minutes` : "N/A"}</span>
                </p>
                <p>
                    <span className="info-header">Director:</span>
                    <span className="info-content">{director}</span>
                </p>
                <p>
                    <span className="info-header">Original Language:</span>
                    <span className="info-content">{movie.original_language.toUpperCase() || "N/A"}</span>
                </p>
                <p>
                    <span className="info-header">Status:</span>
                    <span className="info-content">{movie.status || "N/A"}</span>
                </p>
                <p>
                    <span className="info-header">Revenue:</span>
                    <span className="info-content">
                        {movie.revenue ? `$${(movie.revenue / 1_000_000).toFixed(1)} Million` : "N/A"}
                    </span>
                </p>
            </div>

            <h1 id="textInDetail" className="trailerTitle">Teasers / Trailers:</h1>
            <div className="teaserTrailers">
                {movie.videos && movie.videos.results.length > 0 ? (
                    movie.videos.results
                        .filter((trailer) =>
                            ["Teaser", "Trailer", "Clip"].includes(trailer.type)
                        )
                        .map((trailer) => (
                            <div key={trailer.id} className="trailerTile">
                                <a
                                    href={`https://www.youtube.com/watch?v=${trailer.key}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="trailerThumbnail"
                                        src={`https://img.youtube.com/vi/${trailer.key}/0.jpg`}
                                        alt={trailer.name}
                                    />
                                    <h3 className="trailerName">{trailer.name}</h3>
                                </a>
                            </div>
                        ))
                ) : (
                    <p id="textInDetail">No trailers available.</p>
                )}
            </div>

            <button
                className="backButton"
                onClick={() => (clickedFromFeature ? backToGenre() : navigate(-1))}
            >
                Back
            </button>
        </div>
    );
}

export default DetailView;