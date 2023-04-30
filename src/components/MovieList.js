import React, {useState} from 'react'
import MovieCard from './MovieCard';
import  'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar';
import '../style/Style.css'
import { films } from '../Data'

function MovieList() {
  const [movies,setMovies] = useState(films);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchRating, setSearchRating] = useState('');

  const handleSearchTitle = (event) => {
    setSearchTitle(event.target.value);
  };

  const handleSearchRating = (event) => {
    setSearchRating(event.target.value);
  };
// Ajout d'un nouveau film
  const [formData, setFormData] = useState({ title: "", description: "", posterURL: "", rating: "" });
  const handleAddMovie = (event) => {
    event.preventDefault();
    const newMovie = {
      id: movies.length + 1,
      title: formData.title,
      description: formData.description,
      posterURL: formData.posterURL,
      rating: formData.rating
    };
    setMovies([...movies, newMovie]);
    setFormData({ title: "", description: "", posterURL: "", rating: "" });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddMovie(event);
  };
//Filtre
  const filteredMovies = movies.filter((movie) => 
    movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
    movie.rating >= searchRating
  );
  return (
    <div>
      <Navbar />
      <div id="movie-add" className='container'>
        <h5>Add New Movie</h5>
        <form onSubmit={handleSubmit}>
          <div className="d-flex mb-3">
            <div className="form-group col-4">
              <label htmlFor="title">Title:</label>
              <input className='form-control' type="text" id="title" required value={formData.title} onChange={(event) => setFormData({...formData, title: event.target.value})} />
            </div>
            <div className="form-group desc col-6">
              <label htmlFor="description">Description:</label>
              <input className='form-control' type="text" id="description" required value={formData.description} onChange={(event) => setFormData({...formData, description: event.target.value})} />
            </div>
          </div>
          <div className="d-flex mb-3">
            <div className="form-group col-6">
              <label htmlFor="posterURL">Poster URL:</label>
              <input className='form-control' type="text" id="posterURL" required value={formData.posterURL} onChange={(event) => setFormData({...formData, posterURL: event.target.value})} />
            </div>
            <div className="form-group ratingdiv col-4">
              <label htmlFor="rating">Note:</label>
              <input className='form-control' type="number" id="rating" required value={formData.rating} onChange={(event) => setFormData({...formData, rating: event.target.value})} />
            </div>
          </div>
          <button className='btn btn-success' type="submit">Add</button>
        </form>
      </div>
      <div className='d-flex container justify-content-between mt-4 '>
        <div className="filterTitle">
          <h5>filter</h5>
        </div>
      <div className="filters d-flex">
        <input
          type="text"
          placeholder="Rechercher par titre"
          value={searchTitle}
          onChange={handleSearchTitle}
          className='form-control'
        />
        <input
          type="number"
          placeholder="Note minimale"
          value={searchRating}
          onChange={handleSearchRating}
          className='form-control mx-4'
        />
      </div>
    </div>
      <div className="d-flex justify-content-evenly flex-wrap mt-4 mb-3">
        {filteredMovies.map((movie) => (
          <div key={movie.id}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              description={movie.description}
              posterURL={movie.posterURL}
              rating={movie.rating}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieList