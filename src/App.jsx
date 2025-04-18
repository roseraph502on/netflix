import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout'
import Homepage from './page/Homepage/Homepage'
import MovieDetail from './page/MovieDetail/MovieDetail'
import MoviesPage from './page/Movies/MoviesPage'
import NotFoundPage from './page/NotFoundPage/NotFoundPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        
        <Route path="movies">
          <Route pindex element={<MoviesPage />} />
          <Route path=":id" element={<MovieDetail />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>


  )
}

export default App
