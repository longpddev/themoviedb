import { useMoviesNowPlaying } from '../hooks/useMoviesNowPlaying'
import {MovieListPage} from '../components/MovieListPage/MovieListPage'
import { useSearchParams } from 'react-router'

const MovieNowPlaying = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? 1;
  const { data: movies, isLoading, error } = useMoviesNowPlaying({page: Number(page)})
  return (
    <MovieListPage
      page={Number(page)}
      isLoading={isLoading}
      error={error?.message}
      movies={movies?.results ?? []}
      sectionTitle="Now Playing"
      totalPages={movies?.total_pages ?? 0}
      onPageChange={(page) => {
        setSearchParams({page: page.toString()})
      }}
    />
  )
}

export default MovieNowPlaying