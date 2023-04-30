import React from 'react'
import  'bootstrap/dist/css/bootstrap.min.css'
import  '../style/Style.css'
import { Link } from 'react-router-dom'

function MovieCard({ id,title, description, posterURL, rating}) {

  return (
    <Link className="cardMovie" to={`/movie/${id}`}>
      <div className='card mb-3' style={{width:'18rem',height:'350px'}}>
        <img src={posterURL} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="description">
            <p className="card-text">{description}</p>
            <span className="rating mt-3 fw-bold">Note: {rating}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard