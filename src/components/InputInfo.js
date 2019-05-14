import React from 'react'

const InputInfo = props => (
      <form onSubmit={props.getWeather}>
        <input type='text' name='city' placeholder='City'/>
        <button>Get Weather</button>
      </form>  
    )

export default InputInfo;