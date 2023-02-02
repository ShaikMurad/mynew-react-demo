import { useFormik } from "formik";
import * as yup from "yup";


const formValidationSchema = yup.object({
    email: yup
        .string()
        .email()
        .required("Why not fill this email?😊")
        .min(12, "Need a bigger email😊"),
    password: yup
        .string()
        .required("Why not fill this Password?😊")
        .min(8, "Need a bigger password😊")
        .max(12, "Too much password😊"),

});
export function BasicForm() {
    const { handleSubmit, handleChange, handleBlur, values, touched, errors
    } = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: formValidationSchema,
        onSubmit: (values) => console.log("Form values", values),
    });
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                type="email" placeholder="email"
            />
            {touched.email && errors.email ? errors.email : null}
            <input
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}

                type="password" placeholder="password"
            />

            {touched.password && errors.password ? errors.password : null}

            <button type="submit" >Submit</button>

        </form>
    );
}


// export function BasicForm() {
//     const formik = useFormik({
//         initialValues: { email: "", password: "" },
//         validationSchema: formValidationSchema,
//         onSubmit: (values) => console.log("Form values", values),
//     });
//     return (
//         <form onSubmit={formik.handleSubmit}>
//             <input
//                 name="email"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.email}
//                 type="email" placeholder="email"
//             />
//             {formik.touched.email && formik.errors.email ? formik.errors.email : null}
//             <input
//                 name="password"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.password}

//                 type="password" placeholder="password"
//             />

//             {/* {type = password ? text : password}
//             <VisibilityIcon /> */}



//             {formik.touched.password && formik.errors.password ? formik.errors.password : null}

//             <button type="submit" >Submit</button>

//             {/*

//             <br></br>
//             Values
//             <pre>{JSON.stringify(formik.values)}</pre>
//             Error
//             <pre>{JSON.stringify(formik.errors)}</pre>
//             Touched
//             <pre>{JSON.stringify(formik.touched)}</pre> */}

//         </form>
//     );
// }
