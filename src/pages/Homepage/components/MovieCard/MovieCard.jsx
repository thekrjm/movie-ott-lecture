import React from 'react';
import './MovieCard.styles.css';
import { Badge } from 'react-bootstrap';

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage: `url("https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}")`,
      }}
      className='movie-image'
    >
      <h1>{movie?.title}</h1>
      {movie.genre_ids.map((id) => (
        <Badge bg='danger'>{id}</Badge>
      ))}
      <div>{movie.vote_average}</div>
      <div>{movie.popularity}</div>
      <div>{movie.adult ? '19세 관람가' : '전체 관람가'}</div>
    </div>
  );
};

export default MovieCard;
