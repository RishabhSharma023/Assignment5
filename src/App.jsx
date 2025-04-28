import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Hero from './Components/Hero.jsx';
import Featured from './Components/Feature.jsx';
import Footer from './Components/Footer.jsx';
import axios from "axios";
import HomeView from ".Views/HomeView.jsx"
import RegisterView from ".Views/RegisterView.jsx"
import LoginView from ".Views/LoginView.jsx"
import MoviesView from ".Views/MoviesView.jsx"
import DetailedView from ".Views/DetailedView.jsx"
import GenreView from ".Views/GenreView.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/movies" element={<MoviesView />}>
          <Route path="genre/:genre_id" element={<GenreView />} />
          <Route path="details/:id" element={<DetailedView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;