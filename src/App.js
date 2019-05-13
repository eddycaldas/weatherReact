import React, {Component} from 'react'

import Title from './components/Title'
import InputInfo from './components/InputInfo'
import Details from './components/Details'

const API_KEY = "&APPID=25b486c97325bf6814cc4456fabac99e"


class App extends Component {
  state = {
    temperature: '',
    city: '',
    MaxTemp: '',
    MinTemp: '',
    description: '',
    humidity: '',
    error: ''
  }
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements[0].value
    // const city = e.target.elements.city.value
    const get_api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}${API_KEY}`)
    const data = await get_api.json()
  //  console.log(data.main.temp)
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      MaxTemp: data.main.temp_max,
      MinTemp: data.main.temp_min,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      error: ''
    })
  }
  
  render() {
    return (
      <div>
        <Title />
        <InputInfo getWeather={this.getWeather}/>
        <Details 
          temperature={this.state.temperature}
          city={this.state.city}
          MaxTemp={this.state.MaxTemp}
          MinTemp={this.state.MinTemp}
          description={this.state.description}
          humidity={this.state.humidity}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default App;