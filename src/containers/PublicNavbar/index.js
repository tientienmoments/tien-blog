import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../redux/actions/auth.actions"

const PublicNavbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
    // TODO: handle Logout
  };
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
        <li>Login</li>
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
