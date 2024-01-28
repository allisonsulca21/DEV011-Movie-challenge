// App.tsx
import { useState, useEffect } from "react"
import { getMoviesPanel } from "./fetchMovies";
import './styles/App.css'
import 'bulma/css/bulma.min.css'
import { MoviesCard } from "./CardMovie";
import { Pagination } from "./pagination"

function App() {
  const [movies, setMovies] = useState<any[]>([])

  const totalMovies =movies.length; // es lo que obtengo de la API

  const [moviesPerPage, setMoviesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const lastPanel = currentPage * moviesPerPage //Total de 6
  const firstPanel = lastPanel - moviesPerPage //Total de 0

  useEffect(() => {

    // getPopularMovies()
    getMoviesPanel()
      .then((data) => {
        console.log(data);
        const movieList = data.results || [];
        setMovies(movieList)
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <>
      <header>
      <img className="appTitle" src="src/assets/MovieStation.png" alt="appTitle"/>
      </header>
      <main className="gridLayout">
        {movies.map((movie) => (
          <ul key={movie.id} className="ulApp">
            <MoviesCard key={movie.id} movie={movie}/>
          </ul>
        )).slice(firstPanel, lastPanel)}
      </main>
      <footer className="footerStyle">
        <Pagination 
            moviesPerPage={moviesPerPage} 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}
            totalMovies={totalMovies} />
      </footer>    
    </>
  )
}

export default App
