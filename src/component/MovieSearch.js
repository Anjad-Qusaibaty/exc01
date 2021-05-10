import { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

function Moviecard(props) {
  return(
    <div>
      <h3>{props.title}</h3>
      <img src={props.imgurl} alt={props.alt}/>
      <Link to={`/movies/${props.movieID}`}><button id={props.movieID} title= {props.title}>More details</button></Link>
    </div>
  )
};




export default function MovieSearch() {
  
const [searchedMovie, set_SearchedMovie] = useState("");
const [fetchedMovies, set_fetchedMovies]=useState({status:'Waiting for input'})



    async function handel(event){
      event.preventDefault();
    
          try{
          
          set_fetchedMovies({status: 'Searching'})
    
          const queryParam = encodeURIComponent(searchedMovie);
    
          const response = await axios.get(`https://www.omdbapi.com/?s=${queryParam}&apikey=f97e167d`);
          
          if (response.data.Error) {
            set_fetchedMovies({ status: 'Error' })
          } else {
            set_fetchedMovies({ status: 'Done', data: response.data.Search });
          }
          
          set_SearchedMovie("");
    
          } catch (error){
              console.log("error test:", error.message);
          }
        };


  return (
    <div>
      <h2>Search for a movie to find some info about it</h2>
        <form onSubmit={handel}>
        Search a movie: <input
        onChange={(event)=> set_SearchedMovie(event.target.value)}
        value={searchedMovie} 
        type="text"
        placeholder="Movie's Name"/>
         <button>Search</button>
      </form>
              <div>
                  {fetchedMovies.status ==="Error" && "Search failed"}
                  {fetchedMovies.status ==="Searching" && "Searching"}
                  {fetchedMovies.status ==="Done" && 
                  fetchedMovies.data.map((movie)=>
                  <Moviecard 
                  key={Math.random()}
                  alt={`This is the poster image of ${movie.Title}`}
                  movieID={movie.imdbID}
                  title={movie.Title}
                  imgurl={movie.Poster}/>)
                  }
                  
              </div>
    </div>
  );
}

