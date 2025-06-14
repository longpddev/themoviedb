import {useSearchParams} from 'react-router';
import {useSearchMovies} from '../hooks/useSearchMovies';
import {MovieListPage} from '../components/MovieListPage/MovieListPage';

const SearchMoviePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? 1;
  const query = searchParams.get('query') ?? "";
  const { data: movies, isLoading, error } = useSearchMovies({page: Number(page), query: query, include_adult: false})
  return (
    <MovieListPage
      page={Number(page)}
      isLoading={isLoading}
      error={error?.message}
      movies={movies?.results ?? []}
      sectionTitle="Search movies"
      totalPages={movies?.total_pages ?? 0}
      onPageChange={(page) => {
        const clonedParams = new URLSearchParams(searchParams);
        clonedParams.set('page', page.toString());
        setSearchParams(clonedParams)
      }}
    />
  )
}

export default SearchMoviePage