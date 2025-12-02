import { useState } from 'react'
import axios from 'axios'
import './App.css'


function App() {
  let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState(null);
  const weatherKey = import.meta.env.VITE_API_KEY;

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}`

  function getWeather() {
    axios.get(URL)
      .then((res) => {
        setWeatherData(res.data)
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      <input type="text" placeholder='Search city' value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={getWeather}>Cerca</button>
      <p>{city}</p>
    </>
  )

}

export default App