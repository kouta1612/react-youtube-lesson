import React from "react";
import './App.css'
import { MovieContext } from "./MovieContext";
import MovieList from "./MovieList";
import Nav from "./Nav";

function App() {
  return (
    <MovieContext>
      <div className="app">
        <Nav />
        <MovieList />
      </div>
    </MovieContext>
  )
}

export default App