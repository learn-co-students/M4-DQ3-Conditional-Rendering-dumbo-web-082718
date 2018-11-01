import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state= {
    currentTab: 'profile'
  }

  handleClick = event =>{

      this.setState({
        currentTab: event.target.id
      })
  }

  render() {
    let obj={
      profile:<Profile  />,
    photo:<Photos  />,
    cocktail:<Cocktails  />,
      pokemon: <Pokemon />
      }
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */



    return (
      <div>
        <MenuBar currentTab={this.state.currentTab} handleClick={this.handleClick} />
        <div>{obj[this.state.currentTab]}</div>
      </div>
    )
  }

}

export default MainBox
