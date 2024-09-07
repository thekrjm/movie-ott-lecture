import React from 'react';
import './Homepage.styles.css';
import Banner from './components/Banner/Banner';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';

const Homepage = () => {
  return (
    <div className='test'>
      <div>
        <Banner />
        <PopularMovieSlide />
      </div>
    </div>
  );
};

export default Homepage;
