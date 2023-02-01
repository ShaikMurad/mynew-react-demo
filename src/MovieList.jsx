import { Movie } from "./Movie";
import { AddMovie } from "./AddMovie";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';



export function MovieList() {

    const [movieList, setMovieList] = useState([]);


    const getMovies = () => {
        fetch('https://63d75fb75dbd723244249e8b.mockapi.io/movies', {
            method: "GET",
        })
            .then((data) => data.json())
            .then((mvs) => setMovieList(mvs));
    }
    useEffect(() => getMovies(), []);

    const deleteMovie = async (id) => {
        console.log("Deleting movie...", id);
        //Delete-> movie (refresh data)



        //Technique:1

        // fetch(`https://63d75fb75dbd723244249e8b.mockapi.io/movies/${id}`, {
        //     method: "DELETE",
        // }).then(() => getMovies());

        //Technique:2

        await fetch(`https://63d75fb75dbd723244249e8b.mockapi.io/movies/${id}`, {
            method: "DELETE",
        });
        getMovies();
    };

    return (
        <div>

            <div className="movie-list">
                {movieList.map((mv) => (
                    <Movie
                        key={mv.id}
                        movie={mv}
                        id={mv.id}
                        deleteButton={<IconButton sx={{ marginLeft: "auto" }} onClick={() => deleteMovie(mv.id)} color="error">

                            <DeleteIcon />
                        </IconButton>

                        }

                    />
                ))}

            </div>
        </div>

    );
}


