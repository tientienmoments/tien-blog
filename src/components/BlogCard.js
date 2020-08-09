import React from "react";
import { Row } from "react-bootstrap";
import Moment from "react-moment";

const BlogCard = ({ blog, handleClick }) => {
  return (
    <div>
      <div onClick={() => handleClick(blog._id)} className="tien-card">
        <div className="thumbnail"><img class="left" src="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg" /></div>
        <div className="right">
          <h1 style={{ fontSize: "50px" }}>{blog.title}</h1>
          <div className="author"><img src="https://randomuser.me/api/portraits/men/95.jpg" />
            <h2 className="tien-author-style"><span className="text-muted">
              @{blog?.user?.name}
            </span></h2>
          </div>
          <div className="separator"></div>
          <p>{blog.content.length <= 99
            ? blog.content
            : blog.content.slice(0, 150) + "..."}
          </p>
          <div className="separator"></div>
          <Row className="tien-reaction-style" >
            <img src="https://i.pinimg.com/originals/9e/6c/2b/9e6c2b1ba0487591039b9909c0c00473.jpg" alt="icon" style={{ width: "50px", borderRadius: "80px" }} />
                  1
                  <img src="https://i.pinimg.com/originals/56/ae/c6/56aec6a4fed459cb78bb5cd4d80481f7.png" alt="icon" style={{ width: "70px", borderRadius: "80px" }} />
                  2
                  <img src="https://i.pinimg.com/originals/ea/ec/38/eaec38b87381bdc0a39f43d76f1fbe14.jpg" alt="icon" style={{ width: "50px", borderRadius: "80px" }} />
                  3
                  <img src="https://i.pinimg.com/originals/75/b7/87/75b787e99b42d53d79fd90050668397f.jpg" alt="icon" style={{ width: "50px", borderRadius: "80px" }} />
                  4
                  <img src="https://i.pinimg.com/originals/a9/23/80/a92380a8e38e832687334deeddfb2af9.png" alt="icon" style={{ width: "75px", borderRadius: "80px" }} />
                  5
          </Row>
        </div>
        <div className="tien-card-bottom">
          <div >Wrote</div>
          <div><Moment fromNow>{blog.createdAt}</Moment></div>
        </div>
      </div>
      {/* <Card onClick={() => handleClick(blog._id)} className="item">
        <Card.Img variant="top" src="https://via.placeholder.com/160x100" />
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text>
            {blog.content.length <= 99
              ? blog.content
              : blog.content.slice(0, 99) + "..."}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <span className="text-muted">
            @{blog?.user?.name} wrote <Moment fromNow>{blog.createdAt}</Moment>
          </span>
        </Card.Footer>
      </Card> */}
    </div>
  );
};

export default BlogCard;
