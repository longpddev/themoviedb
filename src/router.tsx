import { createBrowserRouter } from 'react-router';
import App from './App';
// import { MovieDetailsPage } from './pages/MovieDetailsPage';
import MovieNowPlayingPage from './pages/MovieNowPlayingPage';
import MovieTopRatedPage from './pages/MovieTopRatedPage';
import {MovieDetailsPage} from './pages';
import SearchMoviePage from './pages/SearchMoviePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MovieNowPlayingPage />
      },
      {
        path: 'now-playing',
        element: <MovieNowPlayingPage />
      },
      {
        path: 'top-rated',
        element: <MovieTopRatedPage />
      },
      {
        path: 'movie/:id',
        element: <MovieDetailsPage />
      },
      {
        path: 'search',
        element: <SearchMoviePage />
      }
    ]
  }
]); 