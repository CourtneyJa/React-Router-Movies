import React from 'react';

const MovieCard = props => {
  const {title, director, metascore, stars} = props;
  return(
    
      <div className="movie-card">
        <h1>{title}</h1>
        <div className="movie-director">
          Directed by: <em>{director}</em>  
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>

        <h3>Actors</h3>

        {stars.map(star =>(<div key={star} className="movie-star">{star}</div>))}
      </div>
    
  );
};

export default MovieCard;
