import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  render() {
    const {destinationsList} = this.props

    return (
      <div className="destination-app-container">
        <div className="app-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input type="search" className="search-bar" placeholder="Search" />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="image-alignment"
            />
          </div>
          <ul className="destination-items-container">
            {destinationsList.map(eachDestination => (
              <DestinationItem
                key={eachDestination.id}
                destinationDetails={eachDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
