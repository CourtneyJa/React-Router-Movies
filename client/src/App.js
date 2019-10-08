import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    if(savedList.map(movie => movie.id).includes (movie.id)){
      console.log ('Its happening...')
      setSavedList( [...savedList, movie] );
    } else console.log ('Movie not saved');

  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/' component={MovieList} />
      <Route path='/movies/:id' render = {props=> <Movie {...props} addToSavedList= {addToSavedList}/>} />
    </div>
  );
};

export default App;
