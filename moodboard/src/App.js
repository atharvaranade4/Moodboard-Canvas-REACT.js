import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Landing from './Landing'

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Landing" element={<Landing />} />
        </Routes>
      </>
  )
}
 

export default App