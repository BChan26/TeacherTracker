import './App.css';
import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Read from "./components/Read"
import NewThought from './components/NewThought'
import Thoughts from "./components/Thoughts"
import Tracker from "./components/Tracker"

function App() {
  return (

      <div className="App">
        <header>
          <Nav></Nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Tracker/>} />
            <Route path="/NewThought" element={<NewThought/>} />
            <Route path="/Thoughts" element={<Thoughts/>} />
            <Route path="/Read" element={<Read/>} />
          </Routes>
        </main>
      </div>
  )
}

export default App;
