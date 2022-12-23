import './App.css';

// import react from "react"
// const DataContext = react.createContext();

import { Route, Routes } from "react-router-dom"
import CreateStudent from "./components/CreateStudent"
import Nav from "./components/Nav"
import Read from "./components/Read"
import Thoughts from "./components/Thoughts"
import Tracker from "./components/Tracker"

// import { useState, useEffect } from "react"

function App() {
  return (

      <div className="App">
        <header>
          <Nav></Nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Tracker/>} />
            <Route path="/CreateStudent" element={<CreateStudent/>} />
            <Route path="/Thoughts" element={<Thoughts/>} />
            <Route path="/Read" element={<Read/>} />
          </Routes>
        </main>
      </div>
  )
}

export default App;
