import React from "react";
import {Movie} from "../types/Movie";
import MovieCard from "./MovieCard";

// Definir los props con la interfas de Movies
interface MovieListProps {
    movies: Movie[];
}

const MovieList: React.FC<MovieListProps> =({movies}) => {
    return(
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    );
};

export default MovieList;