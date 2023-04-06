import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Movies from "./components/movies/Movies";
import Movie from "./pages/moviedetails/Movie";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="movie/:id" element={<Movie />} />
          <Route exact path="movies/:type" element={<Movies />} />
          <Route exact path="/*" element={<h1>Error page not found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
