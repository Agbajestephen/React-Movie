import { useState } from "react";
import MovieCard from "../components/movieCard";
import "../css/Home.css"

function Home() {
  //state
  const [searchQuery, setSearchQuery] = useState("");
  const movie = [
    { id: 1, title: "john wick", release_date: "2020" },
    { id: 2, title: "Terminator", release_date: "1999" },
    { id: 3, title: "The Matrix", release_date: "1998" },
  ];

  const handlerSearch = (e) => {
    e.preventDefault(); //stops reload
    alert(searchQuery);
    setSearchQuery("");
  };
  return (
    <div className="home">
      <form onSubmit={handlerSearch} className="Search">
        <input
          type="text"
          placeholder="Search for movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {/* map */}
      <div className="home_grid">
        {movie.map(
          (movie) =>
             (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
        ;
      </div>
    </div>
  )
}

export default Home;
