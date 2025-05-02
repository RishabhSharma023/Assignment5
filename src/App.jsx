import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeView from "./Views/HomeView.jsx";
import RegisterView from "./Views/RegisterView.jsx";
import LoginView from "./Views/LoginView.jsx";
import MoviesView from "./Views/MoviesView.jsx";
import GenreView from "./Views/GenreView.jsx";
import DetailView from "./Views/DetailView.jsx";
import ErrorView from "./Views/ErrorView.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/movies" element={<MoviesView />}>
          <Route path="genre/:genre_id" element={<GenreView />} />
          <Route path="details/:id" element={<DetailView />} />
        </Route>
        <Route path="*" element={<ErrorView />} />
      </Routes>
    </Router>
  );
}

export default App;