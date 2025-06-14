import {useSearchParams} from 'react-router';
import {useMoviesTopRated} from '../hooks/useMoviesTopRated';
import {MovieListPage} from '../components/MovieListPage/MovieListPage';

const MovieTopRated = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? 1;
  const { data: movies, isLoading, error } = useMoviesTopRated({page: Number(page)})
  return (
    <MovieListPage
      page={Number(page)}
      isLoading={isLoading}
      error={error?.message}
      movies={movies?.results ?? []}
      sectionTitle="Top Rated"
      totalPages={movies?.total_pages ?? 0}
      onPageChange={(page) => {
        setSearchParams({page: page.toString()})
      }}
    />
  )
}

export default MovieTopRated