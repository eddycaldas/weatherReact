import React, {Component} from 'react'

class Details extends Component {
  render() {
    return (
      <div>
        {this.props.temperature}
        {this.props.city}
        {this.props.MaxTemp}
        {this.props.MinTemp}
        {this.props.description}
        {this.props.humidity}
      </div>
    )
  }
}

export default Details