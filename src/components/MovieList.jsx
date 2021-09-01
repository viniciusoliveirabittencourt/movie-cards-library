import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const arrMovies = this.props.movies;
    return (
      <main>
        { arrMovies.map((movies, index) => <MovieCard key={ index } movie={ movies } />) }
      </main>
    );
  }
}

export default MovieList;
