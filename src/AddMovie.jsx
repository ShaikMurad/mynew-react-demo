
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from './global';

const formValidationSchema = yup.object({
    name:
        yup.string().required("A cool name is in need😊"),
    poster:
        yup.string().required("A cool poster is in need😊").min(4, "Need a bigger poster 😊").url(),
    rating:
        yup.number().required("A cool rating is in need😊").min(0, "Need a bigger rating 😊").max(10),
    summary:
        yup.string().required("A cool summary is in need😊").min(20, "Need a bigger summary 😊"),
    trailer:
        yup.string().required("A cool trailer is in need😊").min(4, "Need a bigger trailer 😊").url(),
},
);

export function AddMovie() {

    const { handleSubmit, handleChange, handleBlur, values, touched, errors
    } = useFormik({
        initialValues: {
            name: "",
            poster: "",
            rating: "",
            summary: "",
            trailer: "",
        },

        validationSchema: formValidationSchema,
        onSubmit: (newMovie) => {
            console.log("Form values", newMovie),
                addMovie(newMovie);
        },
    });
    const navigate = useNavigate();
    const addMovie = async (newMovie) => {
        console.log(newMovie);
        await fetch(`${API}/movies`, {
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: {
                "Content-Type": "application/json",
            },

        });
        navigate("/movies");

    };
    return (
        <form onSubmit={handleSubmit} className="add-movie-form">
            <TextField
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                label="Name"
                variant="outlined"
                error={touched.name && errors.name}
                helperText={touched.name && errors.name ? errors.name : null}

            />


            <TextField
                name="poster"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.poster}
                label="Poster"
                variant="outlined"
                error={touched.poster && errors.poster}
                helperText={touched.poster && errors.poster ? errors.poster : null}
            />

            <TextField
                name="rating"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rating}
                label="Rating"
                variant="outlined"
                error={touched.rating && errors.rating}
                helperText={touched.rating && errors.rating ? errors.rating : null}
            />

            <TextField
                name="summary"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.summary}
                label="Summary"
                variant="outlined"
                error={touched.summary && errors.summary}
                helperText={touched.summary && errors.summary ? errors.summary : null}
            />

            <TextField
                name="trailer"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.trailer}
                label="Trailer"
                variant="outlined"
                error={touched.trailer && errors.trailer}
                helperText={touched.trailer && errors.trailer ? errors.trailer : null}
            />

            {/*Copy existing movieList & add newMovie to it  */}
            <Button
                type="submit"
                variant="contained">
                Add Movie
            </Button>
        </form>

    );

}
