import React, { useEffect, useState } from "react";
import { Container, CardColumns, Jumbotron, Button, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { blogActions } from "../../redux/actions";
import BlogCard from "../../components/BlogCard";
import ClipLoader from "react-spinners/ClipLoader";
import { useHistory, Link } from "react-router-dom";
import PaginationHomePage from '../../components/PaginationHomePage'

const HomePage = () => {
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(1)
  const loading = useSelector((state) => state.blog.loading);
  const blogs = useSelector((state) => state.blog.blogs);
  console.log("checking blogs exit?", blogs)
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleClickOnBlog = (id) => {
    history.push(`/blogs/${id}`);
  };

  console.log("check blogs exit", blogs);

  useEffect(() => {
    dispatch(blogActions.blogsRequest(pageNum));
    console.log(loading);
    console.log("check blog action", blogActions)
  }, []);

  return (
    <div>

      {isAuthenticated ?
        <Jumbotron className="text-center tien-jumbotron-style">
          <div>
            <div className="ternary-system">
              <div className="sun primary"></div>
              <div className="sun secondary"></div>
              <div className="sun ternary"></div>
            </div>
            <div className="sand">
              <div className="pendulums">
                <div className="pendulum">
                  <div className="bar"></div>
                  <div className="motion">
                    <div className="string"></div>
                    <div className="weight"></div>
                  </div>
                </div>
                <div className="pendulum shadow">
                  <div className="bar"></div>
                  <div className="motion">
                    <div className="string"></div>
                    <div className="weight"></div>
                  </div>
                </div>
              </div></div>
            <div className="pyramid"></div>
            <div className="text">
              <h4 className="title"><strong>Write</strong><em>your Moments</em></h4>
              <Link to="/blog/add">
                <Button variant="info">Here</Button>
              </Link>
            </div>



          </div>
        </Jumbotron>

        :
        <Jumbotron className="text-center tien-jumbotron-style">
          <div>
            <div className="ternary-system">
              <div className="sun primary"></div>
              <div className="sun secondary"></div>
              <div className="sun ternary"></div>
            </div>
            <div className="sand">
              <div className="pendulums">
                <div className="pendulum">
                  <div className="bar"></div>
                  <div className="motion">
                    <div className="string"></div>
                    <div className="weight"></div>
                  </div>
                </div>
                <div className="pendulum shadow">
                  <div className="bar"></div>
                  <div className="motion">
                    <div className="string"></div>
                    <div className="weight"></div>
                  </div>
                </div>
              </div></div>
            <div className="pyramid"></div>
            <div className="text">
              <h4 className="title"><strong>Save</strong><em>your Moments</em></h4>

            </div>



          </div>
        </Jumbotron>}

      {loading ? (
        <Row className="d-flex justify-content-center flex-direction-row" style={{ width: "100%" }}><ClipLoader color="#f86c6b" size={150} loading={loading} /></Row>
      ) : (
          <>
            <PaginationHomePage />
            {blogs.length ? (
              <Container>
                <CardColumns className="tien-card-area">
                  {blogs.map((blog) => (
                    <BlogCard
                      blog={blog}
                      key={blog._id}
                      handleClick={handleClickOnBlog}
                    />
                  ))}
                </CardColumns>
              </Container>
            ) : (
                <p>There are no blogs.</p>
              )}

          </>
        )}

    </div>
  );
};

export default HomePage;
