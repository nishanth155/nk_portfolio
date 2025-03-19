// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './Components/NavHead'
import Home from './Components/Home'
import About from './Components/About'
import Project from './Components/Project'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
