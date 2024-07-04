import { useState } from 'react'
import './App.css'
import SearchArea from './Components/SearchArea/searchArea.jsx'
import Header from './header.jsx'
import TrainDetails from './Components/TrainDetails/trainDetails.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      {/* <SearchArea></SearchArea> */}
      <TrainDetails></TrainDetails>
    </>
  )
}

export default App
