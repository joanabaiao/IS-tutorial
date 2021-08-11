import { useEffect, useState } from "react";

const Home = () => {

  const [movies, setMovies] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/api/movies')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setMovies(data);
      })
  }, [])

  return (
    <div className="home">
      {movies &&
        <div className="movie-list">
            {movies.map(movie => (
            <div className="movie-preview" key={movie.id} >
              <div>
                <h2>{ movie.title }</h2>
                <p>{ movie.description }</p>
              </div>
                <img src={movie.image_url}></img>
            </div>  
            ))}
        </div>
      }
    </div>
  );
}
 
export default Home;