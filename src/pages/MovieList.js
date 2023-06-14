import React, { useState, useEffect, useContext } from 'react';
import axiosInstance from '../axiscofig/axiosConfig';
import MovieCard from '../components/MovieCard';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../actions';
import { Button, Form, FormControl } from 'react-bootstrap';
import { LanguageContext } from '../LanguageContext';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axiosInstance.get(
        query ? '/search/movie' : '/movie/popular',
        {
          params: { page, query, language },
        }
      );
      setMovies(response.data.results);
    };
    fetchMovies();
  }, [page, query, language]);

  const handleAddToFavorites = (movie) => {
    dispatch(addToFavorites(movie));
  };

  const handleRemoveFromFavorites = (movie) => {
    dispatch(removeFromFavorites(movie));
  };

  return (
    <div>
      <h1 className="text-center mb-4">Movies List</h1>
      <Form
        className="d-flex justify-content-center mb-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <FormControl
          type="text"
          placeholder="Search"
          className="me-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="outline-success" onClick={() => setPage(1)}>
          Search
        </Button>
      </Form>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onAddToFavorites={handleAddToFavorites}
            onRemoveFromFavorites={handleRemoveFromFavorites}
            isFavorite={favorites.some((fav) => fav.id === movie.id)}
          />
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Button
          variant="outline-secondary"
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => setPage((prevPage) => prevPage + 1)}
          className="ms-2"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default MoviesList;