import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
    email: yup
        .string()
        .required("Why not fill this email?😊")
        .min(12, "Need a bigger email😊"),
    password: yup
        .string()
        .required("Why not fill this Password?😊")
        .min(8, "Need a bigger password😊")
        .max(12, "Too much password😊"),

})


export function BasicForm() {
    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: formValidationSchema,
        onSubmit: (values) => console.log("Form values", values),
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type="email" placeholder="email"
            />
            {formik.touched.email && formik.errors.email ? formik.errors.email : null}
            <input
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                type="text" placeholder="password"
            />
            {formik.touched.password && formik.errors.password ? formik.errors.password : null}

            <button type="submit" >Submit</button>



            <br></br>
            Values
            <pre>{JSON.stringify(formik.values)}</pre>
            Error
            <pre>{JSON.stringify(formik.errors)}</pre>
            Touched
            <pre>{JSON.stringify(formik.touched)}</pre>

        </form>
    );
}
