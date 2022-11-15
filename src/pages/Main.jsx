import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Moviecard from "../components/Moviecard";
import { MovieContext } from "../context/AuthContext";

const ApiKey = "2ffb1cad850221d084465c45e6fd0612";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=`;




const Main = () => {
  const {currentUser}= useContext(MovieContext);
  const [movies, setmovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (api) => {
    axios
      .get(api)
      .then((res) => setmovies(res.data.results))
      .catch((err) => console.log(err));
  };


const handleSubmit =(e)=>{
  e.preventDefault()
if(searchText && currentUser){
  getMovies(SEARCH_API + searchText)
}
else if (!currentUser){
  alert('please log in to')
}else{
  alert('enter a text')
}
setSearchText('')

}

  return (
    <>
      <form className="search" onSubmit={handleSubmit} >
        <input
          type="search"
          className="searchinput"
          placeholder="Search a movie..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <button className="text-white" type="submit">
          Search
        </button>
      </form>
      <div className="main">
        {movies.map((movie) => (
          <Moviecard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};

export default Main;
