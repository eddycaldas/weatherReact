
import React from 'react'

const Details = (props) => {
  return (
      <div className='detail-container'>
        {props.city && <p>Location: {props.city}</p>}
        {props.temperature && <p>Temperature: {props.temperature}</p>}
        {props.MaxTemp && <p>Max Temperature: {props.MaxTemp}</p>}
        {props.MinTemp && <p>min Temperature: {props.MinTemp}</p>}
        {props.description && <p>Description: {props.description}</p>}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.error && <p>{props.error}</p>}
      </div>
  )
}

export default Details