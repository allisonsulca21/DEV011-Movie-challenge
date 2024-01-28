import "./styles/cardMovie.css";

interface MoviesCardProps {
    movie: {
      id: number;
      poster_path: string;
      title: string;
      release_date: string;
    };
  }

export function MoviesCard({movie}: MoviesCardProps) {
    return (
        <>
            <li key={movie.id} className="cardStyle">
              <img className="movPoster"
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt="appTitle" />
              <p className="movTitle">{movie.title}</p>
              <main className="releasedYear"> Released Year:
              <p>
              {movie.release_date}
              </p>
              </main>
            </li>
        </>
    );
}