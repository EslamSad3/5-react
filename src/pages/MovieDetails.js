import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import { useParams } from 'react-router-dom';

const apiKey = '70784c3c147a97e89318635d3a767fb1';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
      );
      setMovie(response.data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return null;

  return (
    <div>
      <h1>Movie Details</h1>
      <MovieCard movie={movie} />
    </div>
  );
};

export default MovieDetails;