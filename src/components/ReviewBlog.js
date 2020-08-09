import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const ReviewBlog = ({
  reviewText,
  handleInputChange,
  handleSubmitReview,
  loading,
}) => {
  return (
    <Form onSubmit={handleSubmitReview} >
      <Form.Group as={Row} className="tien-review-bottom-style">
        <h3 htmlFor="review" column sm="1">
          Comment:
        </h3>
        <Col sm="8">
          <Form.Control
            id="review"
            type="text"
            value={reviewText}
            onChange={handleInputChange}
          />
        </Col>
        {loading ? (
          <Button variant="info" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Submitting...
          </Button>
        ) : (
          <Button type="submit" variant="info" disabled={!reviewText}>
            Submit
          </Button>
        )}
      </Form.Group>
    </Form>
  );
};

export default ReviewBlog;
