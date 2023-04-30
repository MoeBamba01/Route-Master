import React from 'react'
import { Link, useParams} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/Style.css'
import {films} from '../Data'

const MovieDetail = () => {
  const { id } = useParams();
  console.log(id);
  let filmsFiltered = films.filter((film)=> film.id === Number(id) );
  console.log(filmsFiltered);
    return (
      <div >
        {
            filmsFiltered.map((film)  =>(
              <div key={film.id} className="mb-4 d-flex container" style={{ marginTop:'100px', backgroundColor:'#D8DBE2',padding:'0px',borderRadius:'5px', width:'900px'}}>
              <div className="col-6" style={{ width:'300px', height:'400px'}}>
                <img src={film.posterURL} alt="...." style={{height:'100%',width:'100%'}} className=' g-0'/>
              </div>
              <div className="col-6" style={{width: '30rem',marginLeft:'40px',padding:'80px'}}>
                <div className="moviedetail">
                <h3 className="">{film.title}</h3>
                <p className="lh-lg">{film.description}</p>
                </div> 
                <div className="d-flex justify-content-between ">
                  <Link to ={film.trailerLink} className="liens">Watch Trailer</Link>
                  <Link to="/" className="liens">Home</Link>
                </div>
              </div>
            </div>
          ))
      }
    </div>
  );
};
export default MovieDetail;