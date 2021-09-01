import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, subtitle, storyline } = this.props.movie;
    return (
      <img src={ imagePath } alt={`Imagem do filme ${title}`} />
    );
  }
}

export default MovieCard;
