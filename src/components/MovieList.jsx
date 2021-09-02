import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const arrMovies = this.props.movies;
    return (
      <main className="movie-list">
        { arrMovies.map((movies, index) => <MovieCard key={ `Movie Title ${index + 1}` } movie={ movies } />) }
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
