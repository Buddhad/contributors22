//import reactLogo from './assets/react.svg'
import React, { useState, useEffect } from 'react'
import './App.css'
import PropagateLoader from "react-spinners/PropagateLoader";
import Card from "./components/Card"
import Footer from './components/Footer'
import Header from './components/Header'


function App() {
  //const [count, setCount] = useState(0)
  const [ loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  }, [])
  return (
    <>
   {loading === false ? ( <div className="App">
      {/* <h1 className="text-3xl font-bold underline">
      HelloOctober World!
    </h1> */}
    {/* <Navbar/> */}
    <Header/>
    <Card />
    <Footer />
    </div>
   ) : (
    <>
    <div className="App">
    <header className="App-header">
    <div className='md:object-contain'><img srcSet="https://github.blog/wp-content/uploads/2022/10/hacktoberfestbanner.jpeg?resize=800%2C425 800w,https://github.blog/wp-content/uploads/2022/10/hacktoberfestbanner.jpeg?resize=1200%2C630 1600w" src="https://github.blog/wp-content/uploads/2022/10/hacktoberfestbanner.jpeg?resize=1200%2C630" width="100%" height="100%" alt="Expand your open source contributions during Hacktoberfest 2022" className="cover-image rounded-2">
     </img></div>
     <div className='splash'>
      <PropagateLoader color="linear-gradient(90deg, rgb(255, 215, 77) 0%, rgb(64, 221, 255) 50%, rgb(124, 127, 255) 100%)" />
    </div>
    </header>
  </div>
  </>
  )}
  </>
  )
}

export default App
