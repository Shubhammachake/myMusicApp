import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateTokenAndLogAction } from "../myReducers";
import Swal from "sweetalert2";
// import { saveUserCredentials } from "../myReducers";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    fetch("https://dummy-practice-2.onrender.com/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.token) {
          localStorage.setItem("token", data.token);
          dispatch(updateTokenAndLogAction(data.token, true));
          // dispatch(saveUserCredentials(values.email));
          localStorage.setItem("info", values.email);
          Swal.fire({
            icon: "success",
            title: "Successful Login!",
            text: "You have successfully logged in.",
          }).then(() => {
            // console.log("Login Done");
            navigate("/Latest");
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Login Failed!",
            text: "Invalid email or password.",
          });
        }
      })
      .catch((err) => {
        console.log("error", err);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="loginBody">
      <div className="login">
        <div className="watchCont">
          <img
            className="watch"
            src="https://t3.ftcdn.net/jpg/04/54/66/12/360_F_454661277_NtQYM8oJq2wOzY1X9Y81FlFa06DVipVD.jpg"
            alt="error"
          />
        </div>
        <h3>Login</h3>
        <div className="login">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  as={TextField}
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  variant="outlined"
                  style={{ width: "300px" }}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
                <br />
                <br />
                <Field
                  as={TextField}
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  variant="outlined"
                  style={{ width: "300px", backgroundColor: "white" }}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
                <br />
                <br />
                <div className="btn">
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={isSubmitting}
                  >
                    Login
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <br />
        <br />
        <br />
        <Link to="/Sign" id="signLink">
          Not Registered? Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
