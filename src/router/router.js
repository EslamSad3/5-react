import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/NavBar';
const MoviesList = lazy(() => import('../pages/MovieList'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Favorites = lazy(() => import('../pages/Favorites'));

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;