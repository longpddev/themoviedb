
import {useEffect, useState} from 'react';
import styles from './Header.module.scss';
import {Link, useNavigate, useSearchParams} from 'react-router';

export const Header = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate()
  const query = searchParams.get('query');
  const [queryState, queryStateSet] = useState(query ?? '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSearchParams = new URLSearchParams({query: queryState?.trim() ?? ""})
    navigate(`/search?${newSearchParams.toString()}`)
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    queryStateSet(e.target.value)
  };

  useEffect(() => {
    if(!query) return;
    queryStateSet(query);
  }, [query])

  return (
    <header className={styles.header}>
      <div className={styles.container}>
       <h1 className={styles.title}> <Link to={'/'}>Movies</Link></h1>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search movies..."
            value={queryState}
            onChange={handleInputChange}
            className={styles.searchInput}
          />
          <button type="submit" disabled={queryState.length <= 3} className={styles.searchButton}>
            Search
          </button>
        </form>
      </div>
    </header>
  );
}; 