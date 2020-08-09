import React from "react";
import {Row} from "react-bootstrap"

const ReviewList = ({ reviews }) => {
  return (
    <>
      {reviews?.length > 0 && (
        <Row className="tien-list-review-style">
        <ul className="list-unstyled" style={{margin:"0px"}}>
          {reviews.map((review) => (
            <ReviewContent review={review} key={review._id} />
          ))}
        </ul>
        </Row>
      )}
    </>
  );
};
const ReviewContent = ({ review }) => {
  return (
    <div className="tien-comment-style">
      
      <img src="https://img.icons8.com/bubbles/2x/user.png" width={50}/>
      <h4 className="text-muted">@{review?.user?.name}: 
      <span className="text-dark" style={{fontSize:"20px"}}> {review.content}</span> </h4>
    </div>
  );
};

export default ReviewList;
