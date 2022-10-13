//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import Card from "./components/Card"
// typed npm package added
import Typed from 'react-typed' 

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
      <Typed  className='md:text-5xl sm:text-4xl font-bold pl-3' strings={['Hey folks','Welcome to','Hacktoberfest 2022']} typeSpeed={120} backSpeed={140} loop/>
    </h1>
    <Card />
    </div>
  )
}

export default App
