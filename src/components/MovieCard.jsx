import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, subtitle, storyline } = this.props.movie;
    return (
        <section>
            <img src={ imagePath } alt={`Imagem do filme ${title}`} />
            <h4>{ title }</h4>
            <h5>{ subtitle }</h5>
            <p>{ storyline }</p>
        </section>
    );
  }
}

export default MovieCard;
