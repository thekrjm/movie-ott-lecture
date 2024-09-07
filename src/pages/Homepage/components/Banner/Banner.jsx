import React from 'react';
import './Banner.styles.css';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    <h1>Loading......</h1>;
  }

  if (isError) {
    <Alert variant='danger'>{error.message}</Alert>;
  }

  return (
    <div
      style={{
        backgroundImage: `url("https://media.themoviedb.org/t/p/w533_and_h300_bestv2/${data?.results[0].backdrop_path}")`,
      }}
      className='banner'
    >
      <div className='banner-text-area'>
        <h1>{data?.results[0].title}</h1>
        <div>{data?.results[0].overview}</div>
      </div>
    </div>
  );
};

export default Banner;
