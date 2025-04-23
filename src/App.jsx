import { useState } from 'react'
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout'
import Homepage from './page/Homepage/Homepage'
import MovieDetail from './page/MovieDetail/MovieDetail'
import MoviesPage from './page/Movies/MoviesPage'
import NotFoundPage from './page/NotFoundPage/NotFoundPage'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
      paper: '#121212',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>

    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        
        <Route path="movies">
          <Route index element={<MoviesPage />} />
          <Route path=":id" element={<MovieDetail />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </ThemeProvider>


  )
}

export default App
