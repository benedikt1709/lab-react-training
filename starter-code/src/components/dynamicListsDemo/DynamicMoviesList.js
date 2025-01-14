import React, { Component } from 'react';
import ImprovedCard from './ImprovedCard';
import { listItems } from '../ListDemo';

class DynamicMoviesList extends Component {
  constructor(){
      super();
      this.state = {
        movies: [
          { title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
          { title: "Star Wars", director: "Rian Johnson" , hasOscars: true, IMDbRating: 8.7 },
          { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
        ]
      }
  }

  deleteMovieHandler = (movieIndex) => {
    const moviesCopy = [...this.state.movies]; // <== notice the spread operator here!
    moviesCopy.splice(movieIndex, 1);
    this.setState({
        movies: moviesCopy
    })
  }

  addHarryHandler = (movieIndex) => {
    console.log("Add Harry called")
    const moviesCopy = [...this.state.movies];
    moviesCopy.push(movieIndex,
      { title: "Harry Potter", director: "I don´t know", hasOscars: false, IMDbRating: 9.2 }
    )
    this.setState({
      movies: moviesCopy
    })
  }

  render() {
    // leave this console.log() so we can keep track of our state inside our browser's console
    console.log(this.state.movies);
    return (
      <div>
        {
            this.state.movies.map((oneMovie, index) => {
                // return <ImprovedCard key={index} {...oneMovie} />
                return <ImprovedCard key={index} {...oneMovie} clickToDelete={() => this.deleteMovieHandler(index)} addHarry={() => this.addHarryHandler(index)} />
 
          })
        }
      </div>
    );
  }
}

export default DynamicMoviesList;