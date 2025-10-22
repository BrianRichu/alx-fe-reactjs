import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log("User registered:", values);
    alert("Registration successful!");
    resetForm();
  };

  return (
    <div className="form-container" style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>User Registration (Formik)</h2>

      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Username:</label>
              <Field type="text" name="username" placeholder="Enter your username" />
              <ErrorMessage name="username" component="div" style={{ color: "red" }} />
            </div>

            <div style={{ marginTop: "1rem" }}>
              <label>Email:</label>
              <Field type="email" name="email" placeholder="Enter your email" />
              <ErrorMessage name="email" component="div" style={{ color: "red" }} />
            </div>

            <div style={{ marginTop: "1rem" }}>
              <label>Password:</label>
              <Field type="password" name="password" placeholder="Enter your password" />
              <ErrorMessage name="password" component="div" style={{ color: "red" }} />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                marginTop: "1.5rem",
                padding: "0.5rem 1rem",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
