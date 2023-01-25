import { useState } from "react";
import { Counter } from "./Counter.1";


export function Movie({ movie }) {
    // Manage state | Independent | Accelerator
    const [Show, setShow] = useState(true);
    const styles = {
        color: movie.rating > 8.5 ? "green" : "crimson",
    };
    // Derived state |dependent | Speedometer 
    // const summarystyles = {
    //   display: Show ? "block" : "none",
    // };
    return (
        <div className="movie-container">
            <img className="movie-poster " src={movie.poster} alt={movie.name} />
            <div className="movie-spec">
                <h2 className="movie-name">{movie.name}</h2>
                <p style={styles} className="movie-rating">⭐{movie.rating}</p>
            </div>
            <button onClick={() => setShow(!Show)}>Toggle Summary</button>
            {/* Conditional Styling */}
            {/* <p style={summarystyles} className="movie-summary">{movie.summary}</p> */}

            {/* Conditional rendering - Removed from DOM */}
            {Show ? <p className="movie-summary">{movie.summary}</p> : null}
            <Counter />
        </div>
    );
}
