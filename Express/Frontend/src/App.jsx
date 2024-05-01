import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes ,SetJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response) => {
      SetJokes(response.data)
    })
  .catch((error)=>{
    console.log(error);
  })
})
  return (
    <>
     <h1>Jokes with React</h1>
     <p>Joke No : {jokes.length}</p>
     {
      jokes.map((joke)=>{
        <div key={joke.id}>
          <h3>{jokes.title}</h3>
          <p>{jokes.content}</p>
        </div>
      })
     }
    </>
  )
}

export default App
