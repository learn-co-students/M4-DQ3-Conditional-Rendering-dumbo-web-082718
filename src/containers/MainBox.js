import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    profileActive: true,
    photoActive: false,
    cocktailActive: false,
    pokemonActive: false
  }

  handleProfileActive = () => {
    if (this.state.profileActive) {
      this.setState({profileActive: false})
    }
    else {
      this.setState({profileActive: true})
      this.setState({photoActive: false})
      this.setState({cocktailActive: false})
      this.setState({pokemonActive: false})
    }
  }

  handlePhotoActive = () => {
    if (this.state.photoActive) {
      this.setState({photoActive: false})
    }
    else {
      this.setState({photoActive: true})
      this.setState({profileActive: false})
      this.setState({cocktailActive: false})
      this.setState({pokemonActive: false})
    }
  }

  handleCocktailActive = () => {
    if (this.state.cocktailActive) {
      this.setState({cocktailActive: false})
    }
    else {
      this.setState({cocktailActive: true})
      this.setState({pokemonActive: false})
      this.setState({photoActive: false})
      this.setState({profileActive: false})
    }
  }

  handlePokemonActive = () => {
    if (this.state.pokemonActive) {
      this.setState({pokemonActive: false})
    }
    else {
      this.setState({pokemonActive: true})
      this.setState({cocktailActive: false})
      this.setState({photoActive: false})
      this.setState({profileActive: false})
    }
  }




  render() {
    /*
    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state?
    Where should these methods be called?
    */
    return (
      <div>
        <MenuBar
          handleProfileActive = {this.handleProfileActive}
          handlePhotoActive = {this.handlePhotoActive}
          handleCocktailActive = {this.handleCocktailActive}
          handlePokemonActive = {this.handlePokemonActive}/>
        <div>{this.state.photoActive === true ? <Photos /> : " "}</div>
        <div>{this.state.profileActive === true ? <Profile /> : " "}</div>
        <div>{this.state.cocktailActive === true ? <Cocktails /> : " "}</div>
        <div>{this.state.pokemonActive === true ? <Pokemon/> : " "}</div>
      </div>
    )
  }

}

export default MainBox
