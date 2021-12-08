import React from "react";
import './App.css'
import { MovieProvider } from "./MovieContext";
import MovieList from "./MovieList";
import Nav from "./Nav";

function App() {
  return (
    <MovieProvider>
      <div className="app">
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  )
}

export default App