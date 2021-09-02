import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const arrMovies = this.props.movies;
    return (
      <main className='movie-list'>
          { arrMovies.map((movies, index) => <MovieCard key={ index } movie={ movies } />) }
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
}

export default MovieList;
