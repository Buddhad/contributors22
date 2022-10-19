//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import Card from "./components/Card"
import Footer from './components/Footer'
import Header from './components/Header'
import {Routes,Route, Navigate} from 'react-router-dom';
import Signin from './components/Signin';
import Register from './components/Register';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <h1 className="text-3xl font-bold underline">
      HelloOctober World!
    </h1> */}
   
    <Header/>

    <Routes>
    <Route  path='' element={<Card/>}/> 
    <Route  path='/login' element={<Signin/>}/>
    <Route  path='/register' element={<Register/>}/> 
    </Routes>



    {/* <Card /> */}
    <Footer />
    </div>
  )
}

export default App
