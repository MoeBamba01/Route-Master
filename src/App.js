import React from "react";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import {Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MovieList />}/>
        <Route path="/movie/:id" element={ <MovieDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
