// App.tsx
import { useState, useEffect } from "react"
import { getMoviesPanel } from "./movies";

function App() {
  const [movies, setMovies] = useState<any[]>([])

  useEffect(() => {

    // getPopularMovies()
    getMoviesPanel()
      .then((data) => {
        console.log(data);
        const movieList = data.results || [];
        setMovies(movieList)
      })
    // getPopularMovies()
    // .then((data)=>{
    //     data.json().then((panel)=>{
    //       console.log(panel)
    //       setMovies(panel.results)

    //     })    
    // })
  }, []);

  return (
    <>
      <header>
      <h1>Movie World</h1>
      </header>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <>
        {movies.map((movie) => (
          <div key={movie.id}>
            <li>
            {/* Renderiza aquí la información de cada película */}
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
            </li>
            <p>{movie.title}</p>
            <p>{movie.release_date}</p>
          </div>
        ))}
      </>
    </>
  )
}

export default App

// import React from "react";

// export const App: React.FC = () => (
//     <h1>Hello React</h1>
// );
