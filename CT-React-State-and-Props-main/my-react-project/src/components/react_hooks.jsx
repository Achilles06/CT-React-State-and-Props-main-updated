// src/components/MoviesList.jsx
import React, { useState } from 'react';

const MoviesList = () => {
    // Initialize state with a hardcoded list of movies
    const [movies, setMovies] = useState([
        { id: 1, title: 'Inception', genre: 'Action', description: 'A mind-bending thriller by Christopher Nolan.' },
        { id: 2, title: 'Titanic', genre: 'Romance', description: 'A tragic love story aboard the Titanic.' },
        { id: 3, title: 'The Matrix', genre: 'Action', description: 'A hacker discovers reality is an illusion.' },
        { id: 4, title: 'The Notebook', genre: 'Romance', description: 'A love story that spans decades.' },
    ]);

    // State to toggle detailed view for each movie
    const [showDetails, setShowDetails] = useState({});

    // State to toggle between showing all movies and only a specific genre
    const [showActionOnly, setShowActionOnly] = useState(false);

    // Function to toggle movie details visibility
    const toggleDetails = (id) => {
        setShowDetails((prevState) => ({
            ...prevState,
            [id]: !prevState[id], // Toggle the state for the clicked movie
        }));
    };

    // Function to remove a movie
    const removeMovie = (id) => {
        setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    };

    // Function to toggle between all movies and action movies
    const toggleMovieView = () => {
        setShowActionOnly((prev) => !prev);
    };

    // Filter movies based on the genre if 'showActionOnly' is true
    const displayedMovies = showActionOnly
        ? movies.filter((movie) => movie.genre === 'Action')
        : movies;

    return (
        <div>
            <h1>Favorite Movies List</h1>
            {/* Button to toggle between showing all movies and only action movies */}
            <button onClick={toggleMovieView}>
                {showActionOnly ? 'Show All Movies' : 'Show Action Movies'}
            </button>

            <ul>
                {displayedMovies.map((movie) => (
                    <li key={movie.id}>
                        {/* Clickable movie title to toggle details */}
                        <span
                            style={{ cursor: 'pointer', color: 'blue' }}
                            onClick={() => toggleDetails(movie.id)}
                        >
                            {movie.title}
                        </span>
                        
                        {/* Remove button */}
                        <button onClick={() => removeMovie(movie.id)}>Remove</button>

                        {/* Conditional rendering of movie details */}
                        {showDetails[movie.id] && <p>{movie.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
