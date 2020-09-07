import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../redux/actions";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, password2 } = formData;
    console.log(formData)
    if (password !== password2) {
      console.log("diff password")
      setErrors({ ...errors, password2: "Passwords do not match" });
      return;
    }
    // TODO: handle Register
    dispatch(authActions.register(name, email, password));
  };
  if (isAuthenticated) return <Redirect to="/" />;

  const fillFakeData = () => {
    setFormData({
      name: "Minh",
      email: "minh@cs.vn",
      password: "123",
      password2: "123",
    });
  };

  return (
    // <div className="tien-fix-width">
    //   <div className="tien-container">
    //   <div className="top"></div>
    //   <div className="bottom"></div>
    //   <div className="center" >

    // <Container className="tien-container">
    <div className="tien-fix-width">
      <div className="tien-container">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="center">
          <h2>Sign Up</h2>
          <h5>Create Your Account</h5>
          <Form onSubmit={handleSubmit}>
            <input
              className="tien-input"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}

            />
            {errors.name && (
              <small className="form-text text-danger">{errors.name}</small>
            )}
            <input
              className="tien-input"
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}

            />
            <input
              className="tien-input"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}

            />
            {errors.password && (
              <small className="form-text text-danger">
                {errors.password}
              </small>
            )}
            <input
              className="tien-input"
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={formData.password2}
              onChange={handleChange}

            />
            {loading ? (
              <Button
                className="btn-block"
                variant="info"
                type="button"
                disabled
              >
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </Button>
            ) : (
                <Button className="btn-block" type="submit" variant="info">
                  Register
                </Button>
              )}

            {/* TODO: remove fake data */}
            <Button
              className="btn-block"
              type="button"
              variant="light"
              onClick={fillFakeData}

            >
              Fill in fake data
            </Button>

            <p style={{ textAlign: "center" }}>
              Already have an account? <Link to="/login">Sign In</Link>
            </p>

          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
