import { useState } from 'react'
import './App.css'


function App() {
  let [city, setCity] = useState("")

  return (
    <>
      <input type="text" placeholder='Search city' value={city} onChange={(e) => setCity(e.target.value)} />
      <p>{city}</p>
    </>
  )
}

export default App
