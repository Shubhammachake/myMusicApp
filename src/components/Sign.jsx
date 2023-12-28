import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTokenAndLogAction } from "../myReducers";
// import { saveUserCredentials } from "../myReducers";
function Sign() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSignUp = (values, { setSubmitting }) => {
    fetch("https://dummy-practice-2.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "user already exist") {
          Swal.fire({
            icon: "error",
            title: "User Already Exists",
            text: data.error,
          });
          navigate("/");
        } else {
          Swal.fire({
            icon: "success",
            title: "Signup Successful!",
            text: "You have successfully signed up.",
          }).then(() => {
            console.log("credentials:", data);
            localStorage.setItem("token", data.message);
            dispatch(updateTokenAndLogAction(data.token, true));
            // dispatch(saveUserCredentials(values.email));
            localStorage.setItem("info", values.email);
            navigate("/Latest");
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong.",
        });
        console.error("Error", err);
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
        <h3>Sign Up</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSignUp}
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
                style={{ width: "300px" }}
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
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign Up
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <br />
      <br />
      <br />
      <Link to="/" id="signLink">
        Alredy Registered? Login
      </Link>
    </div>
  );
}

export default Sign;
