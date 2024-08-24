import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import MoviesPage from './pages/Movies/MoviesPage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Homepage from './pages/Homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Homepage />}></Route>
        <Route path='movies'>
          <Route index element={<MoviesPage />}></Route>
          <Route path=':id' element={<MovieDetailPage />}></Route>
        </Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
