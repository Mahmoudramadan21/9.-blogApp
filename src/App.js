import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import SingleBlogPage from './pages/SingleBlogPage/SingleBlogPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
