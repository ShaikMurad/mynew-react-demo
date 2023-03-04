import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useEffect, useState } from "react";
import { API } from "./global";

export function MovieDetails() {
    const { id } = useParams();
    // const movie = movieList[id];
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(`${API}/movies/${id}`)
            .then((data) => data.json())
            .then((mvs) => setMovie(mvs));
    }, [id]);

    console.log(movie);

    const styles = {
        color: movie.rating > 8.5 ? "green" : "crimson",
    };
    const navigate = useNavigate();

    return (
        <div>
            <iframe
                width="100%"
                height="650"
                src={movie.trailer}
                title="RRR Trailer (Telugu) - NTR, Ram Charan, Ajay Devgn, Alia Bhatt | SS Rajamouli | 25th March 2022" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

            </iframe>
            <div className="movie-detail-container">

                <div className="movie-spec">
                    <h2 className="movie-name">
                        {movie.name}
                    </h2>
                    <p style={styles} className="movie-rating">
                        ⭐{movie.rating}
                    </p>
                </div>
                <p className="movie-summary">{movie.summary}</p>
            </div>
            <Button
                startIcon={<KeyboardBackspaceIcon />}
                variant="contained"
                onClick={() => navigate(-1)}
                aria-label="Movie details"
            >
                Back
            </Button>
        </div>

    );

}
