import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../redux/actions";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "minh@cs.vn",
    password: "123",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    // if (password.length < 6) {
    //   setErrors({ ...errors, password: "Password must be longer than 6" });
    //   return;
    // }
    dispatch(authActions.loginRequest(email, password));
  };

  if (isAuthenticated) return <Redirect to="/" />;
  return (
    <Container className="tien-container">
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center" >
        <h2>Please Sign In</h2>
        
          <Form onSubmit={handleSubmit}>

            <input
              className="tien-input"
              type="email"
              placeholder="email"
              required
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange} />
            {errors.email && (
              <small className="form-text text-danger">{errors.email}</small>
            )}

            <input
              className="tien-input"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              minLength="3" />

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
              <div>
                <Button className="btn-block" type="submit" variant="info">
                  Login
                </Button>
                </div>
              )}
            <p className="d-flex justify-content-center">
              Don't have an account? <Link to="/register">Sign Up</Link>
            </p>

          
        </Form>
      </div>
      
      </Container >

  );
};

export default LoginPage;
