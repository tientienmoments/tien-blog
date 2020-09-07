import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../redux/actions/auth.actions"
import FacebookLogin from "react-facebook-login"
import GoogleLogin from 'react-google-login';


const PublicNavbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
    // TODO: handle Logout
  };

  const responseFacebook = (response) => {
    console.log("tien check fb res", response);
    const { accessToken } = response;
    console.log("tien check fb res token", accessToken)
    dispatch(authActions.loginWithFacebook(accessToken))

  }

  const responseGoogle = (response) => {
    console.log("tien check go res", response);
    const { accessToken } = response;
    const { profileObj } = response;
    console.log("data user", profileObj)
    console.log("tien check go res token", accessToken)
    dispatch(authActions.loginWithGoogle(accessToken))
  }

  const authLinks = (
    <Nav>
      <Nav.Link as={Link} to="/dashboard">
        <li>Dashboard</li>
      </Nav.Link>
      <Nav.Link onClick={handleLogout}>
        <li>Logout</li>
      </Nav.Link>
    </Nav>
  );
  const publicLinks = (
    <Nav>
      <Nav.Link as={Link} to="/register">
        <li>Register</li>
      </Nav.Link>
      <Nav.Link as={Link} to="/login">
        <li><i class="fas fa-sign-in-alt"></i></li>
      </Nav.Link>
      <Nav.Link >
        <li>

          <div style={{ zIndex: "1" }}>
            <i class="fab fa-facebook-f"></i>
          </div>
          <FacebookLogin
            appId="323239012124882"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            textButton={false}
          />
        </li>
      </Nav.Link>

      <Nav.Link>
        <li>
          <div style={{ zIndex: "1" }}>
            <i class="fab fa-google"></i>
          </div>
          <GoogleLogin
            clientId="604207455641-7o6vk8h9pd4fdvvla90qn2j34kceelkg.apps.googleusercontent.com"
            buttonText={false}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            className="go-login-style"
          />
        </li>
      </Nav.Link>



    </Nav>
  );

  return (
    <div className="tien-nav-top">

      <div className="tien-nav-style" >

        <Navbar.Brand as={Link} to="/" className="wrapper"  >

          <h1 data-heading="BLOG">BLOG</h1>

        </Navbar.Brand>
        <div className="menu"  >
          <ul>
            {!loading && <>{isAuthenticated ? authLinks : publicLinks}</>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PublicNavbar;
