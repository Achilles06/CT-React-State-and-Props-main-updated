
import React from 'react';
import MoviesList from './components/react_hooks';
import UserProfile from './components/state_and_props';

function App() {
    return (
        <div className="App">
            <h1>React State and Props Demo</h1>
            <MoviesList />
            <UserProfile />
        </div>
    );
}

export default App;
