import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { puppyList } from './data.js'



function App() {
  const [puppies, setPuppies] = useState(puppyList)

  const [featPupId, setFeatPupId] = useState(null)

  const featurePup = puppies.find((pup) => pup.id === featPupId)

  return (

    <div className="App">
      {puppies.map((puppy) => {
        return <p className = "puppy" onClick={() => { setFeatPupId(puppy.id) }} key={puppy.id}>{puppy.name}</p>
      })}
      {featPupId && (

      <div className="puppy-details">
        <h2>{featurePup.name}</h2>
        <ul>
          <li> Age: {featurePup.age} </li>
          <li>Email: {featurePup.email}</li>
        </ul>
      </div>)
      
      }
    </div>


  )
}

export default App
