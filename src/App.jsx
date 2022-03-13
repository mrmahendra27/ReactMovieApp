import React, { useState } from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import MovieDeatils from "./MovieDetails";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home isLoading={isLoading} setIsLoading={setIsLoading} />} />
        <Route path="/movie/:id" element={<MovieDeatils isLoading={isLoading} setIsLoading={setIsLoading} />} />
      </Routes>
    </div>
  );
};

export default App;
