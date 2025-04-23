import React, { useEffect, useState } from 'react'
import MovieList from './MovieList'
import { fetchGetMovies } from '../../api/movie';
import { movieStore } from '../../store/movie-store';

function MovieSection() {
    const { fetchMovie, movieList, cart, addToCart} = movieStore()
    
    useEffect(() => {
        fetchMovie();
    }, []);
 

  return (
    <>
        <div className='grid grid-cols-5 place-items-center'>
        {movieList?.map((el, index) => (
            <MovieList key={index} id={el.id} language={el.original_language} overview={el.overview} 
            originalTitle={el.original_title} title={el.title} vote={el.vote_average} poster={el.poster_path}
            />
        ))}
        </div>
    </>
  )
}

export default MovieSection