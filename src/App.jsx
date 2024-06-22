import { useState } from 'react'
import './App.css'
import SearchArea from './SearchArea/searchArea.jsx'
import Header from './header.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <SearchArea></SearchArea>
    </>
  )
}

export default App
