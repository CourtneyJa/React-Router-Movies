import React from 'react';
import {Link} from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <Link to= {'/movies/${movie.id}'} key={movie.id} activeClassName='saved-active'>
      <span key= {movie.id} className="saved-movie">{movie.title}</span>
      </Link>
    ))}
      <Link to= {'/'}>
      <div className="home-button">Home</div>
      </Link>
  </div>
);

export default SavedList;
