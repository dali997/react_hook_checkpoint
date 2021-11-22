import React, {useState} from 'react';
import { moviesData } from './Data';
import './App.css';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import AddMovie from './Components/AddMovie';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [FilterTitle, setFilterTitle]= useState("")
  const [FilterRating, setFilterRating]= useState(0)

  const handleMovie = (newMovie)=>{
    setMovies([...movies,newMovie])
  }
// console.log(movies)
  return (
   <div className="good">
     <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
     <AddMovie handleMovie={handleMovie} />
     <MovieList movies={movies} FilterTitle={FilterTitle} FilterRating={FilterRating} />
   </div>
  );
}

export default App;
