import React, {Component} from 'react'

class Details extends Component {
  render() {
    return (
      <div>
        {this.props.city && <p>Location: {this.props.city}</p>}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.MaxTemp && <p>Max Temperature: {this.props.MaxTemp}</p>}
        {this.props.MinTemp && <p>min Temperature: {this.props.MinTemp}</p>}
        {this.props.description && <p>Description: {this.props.description}</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    )
  }
}

export default Details