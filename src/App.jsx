import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeView from "./Views/HomeView";
import RegisterView from "./Views/RegisterView";
import LoginView from "./Views/LoginView";
import MoviesView from "./Views/MoviesView";
import DetailView from "./Views/DetailView";
import ErrorView from "./Views/ErrorView"; // Import the ErrorView component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/movies" element={<MoviesView showGenresList={true} />} />
        <Route path="/movies/:movieId" element={<DetailView />} />
        <Route path="*" element={<ErrorView />} /> {/* Catch-all route for invalid paths */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;