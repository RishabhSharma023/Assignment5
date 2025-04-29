import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Genres from "../Components/Genres";
import Foooter from "../Components/Footer";
import "./MoviesView.css";

function MoviesView() {
    const genres = [
        { genre: "Sci-Fi", id: 878 },
        { genre: "Thriller", id: 53 },
        { genre: "Adventure", id: 12 },
        { genre: "Family", id: 10751 },
        { genre: "Animation", id: 16 },
        { genre: "Action", id: 28 },
        { genre: "History", id: 36 },
        { genre: "Fantasy", id: 14 },
        { genre: "Horror", id: 27 },
        { genre: "Comedy", id: 35 }
    ];

    return (
        <div className="app-container">
            <Header />
            <h1 className="movieview-title">Movies</h1>
            <div className="genre-container">
                <div className="genre-list">
                    <Genres genresList={genres} />
                </div>
                <div className="genre-movies">
                    <Outlet />
                </div>
            </div>
            <Foooter />
        </div>
    );
}

export default MoviesView;