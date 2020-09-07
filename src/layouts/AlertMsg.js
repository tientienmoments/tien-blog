import React from "react";
import { useSelector } from "react-redux";
import { Alert, Container } from "react-bootstrap";

const AlertMsg = () => {
  const alerts = useSelector((state) => state.alert);
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <Container className="d-flex justify-content-center">
      <Alert key={alert.id} variant={alert.alertType} className="tien-alert-style" >
        <h1 style={{fontSize:"50px"}}>{alert.msg}</h1>
      </Alert>
      </Container>
    ))
  );
};

export default AlertMsg;
