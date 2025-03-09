import React, { lazy } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Suspense } from 'react';
import Loader from './components/Loader/Loader';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SingleBlogPage = lazy(() => import('./pages/SingleBlogPage/SingleBlogPage'));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<SingleBlogPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;