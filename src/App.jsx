import React from 'react'
import { Container } from 'react-bootstrap';
import NavBar from "./components/NavBar";
import MoveList from "./components/MoviesList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'


function App() {
  return (
    <div className="font color-body">
        <Router>
          <NavBar />
          <Container>
            <Routes>
              <Route path='/' element={<MoveList />}/>
              <Route path="/movie/:id" element={<MovieDetails />}/>
              <Route path="*" element={<h2 className='text-center py-2'>Not Found</h2>}/>
            </Routes>
          </Container>
        </Router>
    </div>
  )
}

export default App
