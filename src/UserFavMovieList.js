import React, { Component } from 'react'


class UserFavMovieList extends Component {
  render(){
    
    const users = this.props.user
    const profiles = this.props.profile
    const movies = this.props.movie
    
    //const user_movie_ids = profiles.map(profile => [profile.userID, profile.favoriteMovieID])
    
  	//return (
      //<ol>
      //{user_movie_ids.map((list) => (
    	//<li key = {list[0]}>
		  //{users[list[0]].name}'s favorite movie is {movies[list[1]].name} 
      	//</li>
      //))}
      //</ol>
    //)
    
    return (
      <ol>
      {profiles.map((profile) => (
    	<li key = {profile.id}>
		  {users[profile.userID].name}'s favorite movie is {movies[profile.favoriteMovieID].name} 
      	</li>
      ))}
      </ol>
    )
 
  }
}


export default UserFavMovieList