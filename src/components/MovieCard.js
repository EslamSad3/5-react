import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie, onAddToFavorites, onRemoveFromFavorites, isFavorite }) => {
  const imageUrl = `${baseImageUrl}${movie.poster_path}`;
  const navigate = useNavigate();

  const handleViewDetailsClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.overview}</Card.Text>
        <Button
          variant="primary"
          onClick={handleViewDetailsClick}
          style={{ backgroundColor: 'red', borderColor: 'red' }}
        >
          View Details
        </Button>
        {isFavorite ? (
          <Button
            variant="outline-danger"
            onClick={() => onRemoveFromFavorites(movie)}
            style={{ marginLeft: '10px' }}
          >
            Remove from Favorites
          </Button>
        ) : (
          <Button
            variant="outline-success"
            onClick={() => onAddToFavorites(movie)}
            style={{ marginLeft: '10px' }}
          >
            Add to Favorites
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default MovieCard;