import React from "react";
import PublicNavbar from "../containers/PublicNavbar";
import HomePage from "../containers/HomePage";
import LoginPage from "../containers/LoginPage";
import RegisterPage from "../containers/RegisterPage";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import AlertMsg from "./AlertMsg";
import BlogDetailPage from "../containers/BlogDetailPage"

import PrivateRoute from "../containers/Routes/PrivateRoute";
import AddEditBlogPage from "../containers/AddEditBlogPage";
import DashboardPage from "../containers/DashboardPage"

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      
        <AlertMsg />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />

          <Route exact path="/blogs/:id" component={BlogDetailPage} />
          <PrivateRoute exact path="/blog/add" component={AddEditBlogPage} />
          <PrivateRoute exact path="/blog/edit/:id" component={AddEditBlogPage} />
          {/* <PrivateRoute exact path="/dashboard" component={DashboardPage} /> */}
          <Route path="*" component={NotFoundPage} />
        </Switch>
      
    </>
  );
};

export default PublicLayout;
