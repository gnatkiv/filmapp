import { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
import './app.css';



class App extends Component {

  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=raiting');
    this.setState({movies: movies, isLoading: false})
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Downloading.......</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                  key={movie.id}
                  id={movie.id} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image}
                  year={movie.year}
                  title={movie.title}
                  genres={movie.genres}/>
            ))}
          </div>
        )}
      </section>

    );
  }
}

export default App;
