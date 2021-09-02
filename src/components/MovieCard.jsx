import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, subtitle, storyline, rating } = this.props.movie;
    return (
        <section className='movie-card'>
            <img className='movie-card-image' src={ imagePath } alt={`Imagem do filme ${title}`} />
            <main className='movie-card-body'>
              <h4 className='movie-card-title'>{ title }</h4>
              <h5 className='movie-card-subtitle'>{ subtitle }</h5>
              <p className='movie-card-storyline'>{ storyline }</p>
            </main>
            <Rating  rating={rating} />
        </section>
    );
  }
}

MovieCard.propTypes = {
  imagePath: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
}

export default MovieCard;
