import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    return (
      <footer className="movie-card-rating">
        <h4 className="rating">{ this.props.rating }</h4>
      </footer>
    );
  }
}

Rating.protoType = {
  rating: PropTypes.number,
};

export default Rating;
