import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import MovieDeatils from "./MovieDetails";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDeatils />} />
      </Routes>
    </div>
  );
};

export default App;
