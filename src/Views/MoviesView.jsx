import { useState } from 'react'
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import GenresList from "../Components/Genres.jsx"
import GenreView from './GenreView.jsx'
import DetailView from './DetailView.jsx'
import "./MoviesView.css"

function MoviesView() {
   const listOfGenres = [
      { "genreName": "Action", "id": 28 },
      { "genreName": "Adventure", "id": 12 },
      { "genreName": "Animation", "id": 16 },
      { "genreName": "Fantasy", "id": 14 },
      { "genreName": "Science Fiction", "id": 878 },
      { "genreName": "War", "id": 10752 },
      { "genreName": "Comedy", "id": 35 },
      { "genreName": "Mystery", "id": 9648 },
      { "genreName": "Western", "id": 37 },
      { "genreName": "Family", "id": 10751 },
   ];
   const [genreSelected, setGenreSelected] = useState(28); //Uses id:28 action as a default display
   const [movieIdClicked, setMovieIdClicked] = useState(912649); //Uses Venom last dance as default movie
   const [detailViewDisplayed, setdetailViewDisplayed] = useState(false);
   const [clickedFromFeature, setClickedFromFeature] = useState(false);

   function setGenreId(genre) {
      setGenreSelected(genre);
      setdetailViewDisplayed(false)
   }

   function setMovieIdValue(movie) {
      setMovieIdClicked(movie)
      setClickedFromFeature(false)
      setdetailViewDisplayed(true)
   }

   function returnToGenreView() {
      setdetailViewDisplayed(false)
   }

   return (
      <div>
         <Header />
         <div className='genre-section'>
            <div className='genre-list' >
               <GenresList selectGenreId={setGenreId} genresList={listOfGenres} genreSelected={genreSelected} />
            </div>
            <div className='genre-view' >
               {detailViewDisplayed ?
                  <DetailView movieId={movieIdClicked} backToGenre={returnToGenreView} clickedFromFeature={clickedFromFeature} />
                  : <GenreView genreId={genreSelected} enterDetailView={setMovieIdValue} />}
            </div>
         </div>
         <Footer />
      </div>
   )
}

export default MoviesView