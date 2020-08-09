import React, { useEffect } from "react";
import { Container, CardColumns, Jumbotron, Button, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { blogActions } from "../../redux/actions";
import BlogCard from "../../components/BlogCard";
import ClipLoader from "react-spinners/ClipLoader";
import { useHistory, Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.blog.loading);
  const blogs = useSelector((state) => state.blog.blogs);
  console.log("checking blogs exit?", blogs)
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleClickOnBlog = (id) => {
    history.push(`/blogs/${id}`);
  };

  console.log(blogs);
  useEffect(() => {
    dispatch(blogActions.blogsRequest());
  }, [dispatch]);

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
        <ClipLoader color="#f86c6b" size={150} loading={loading} />
      ) : (
          <>
            <Container>
              <div className="tien-card">
                <div className="thumbnail"><img class="left" src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/897c1fab01ff5ebb3a4b370d52efac89f6c83f37/big-c6fe29388e86817077d33f3bdbba7ed8.jpg" /></div>
                <div className="right">
                  <h1 style={{ fontSize: "50px" }}>Best Time of Year to Visit Santorini</h1>
                  <div className="author"><img src="https://randomuser.me/api/portraits/men/95.jpg" />
                    <h2 className="tien-author-style text-muted">@Minh Vu</h2>
                  </div>
                  <div className="separator"></div>
                  <p>Santorini is always a good idea, whether you are visiting in fall or during summer. The spring is perfect for enjoying warm weather, hiking, and...</p>
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
                  <div>January</div>
                </div>
              </div>

              <div className="tien-card">
                <div className="thumbnail"><img class="left" src="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg" /></div>
                <div className="right">
                  <h1 style={{ fontSize: "50px" }}>Why you Need More Magnesium in Your Daily Diet</h1>
                  <div className="author"><img src="https://randomuser.me/api/portraits/men/95.jpg" />
                    <h2 className="tien-author-style text-muted">@Dung</h2>
                  </div>
                  <div className="separator"></div>
                  <p>Magnesium is one of the six essential macro-minerals that is required by the body...</p>
                  <div className="separator"></div>
                  <Row className="tien-reaction-style" >
                    <img src="https://i.pinimg.com/originals/9e/6c/2b/9e6c2b1ba0487591039b9909c0c00473.jpg" alt="icon" style={{ width: "50px", borderRadius: "80px" }} />
                  8
                  <img src="https://i.pinimg.com/originals/56/ae/c6/56aec6a4fed459cb78bb5cd4d80481f7.png" alt="icon" style={{ width: "70px", borderRadius: "80px" }} />
                  9
                  <img src="https://i.pinimg.com/originals/ea/ec/38/eaec38b87381bdc0a39f43d76f1fbe14.jpg" alt="icon" style={{ width: "50px", borderRadius: "80px" }} />
                  6
                  <img src="https://i.pinimg.com/originals/75/b7/87/75b787e99b42d53d79fd90050668397f.jpg" alt="icon" style={{ width: "50px", borderRadius: "80px" }} />
                  5
                  <img src="https://i.pinimg.com/originals/a9/23/80/a92380a8e38e832687334deeddfb2af9.png" alt="icon" style={{ width: "75px", borderRadius: "80px" }} />
                  7
                  </Row>
                </div>
                <div className="tien-card-bottom">
                  <div >Wrote</div>
                  <div>2019</div>
                </div>
              </div>

              <div className="tien-card">
                <div className="thumbnail"><img class="left" src="https://theplanetd.com/images/camping-in-antarctica-tent.jpg" /></div>
                <div className="right">
                  <h1 style={{ fontSize: "50px" }}>CAMPING IN ANTARCTICA</h1>
                  <div className="author"><img src="https://randomuser.me/api/portraits/men/95.jpg" />
                    <h2 className="tien-author-style text-muted">@tientien</h2>
                  </div>
                  <div className="separator"></div>
                  <p>Did we get to sleep in tents like these? No way! These luxurious beauties were filled with our emergency...</p>
                  <div className="separator"></div>
                  <Row className="tien-reaction-style" >
                    <img src="https://i.pinimg.com/originals/9e/6c/2b/9e6c2b1ba0487591039b9909c0c00473.jpg" alt="icon" style={{ width: "50px", borderRadius: "80px" }} />
                  7
                  <img src="https://i.pinimg.com/originals/56/ae/c6/56aec6a4fed459cb78bb5cd4d80481f7.png" alt="icon" style={{ width: "70px", borderRadius: "80px" }} />
                  8
                  <img src="https://i.pinimg.com/originals/ea/ec/38/eaec38b87381bdc0a39f43d76f1fbe14.jpg" alt="icon" style={{ width: "50px", borderRadius: "80px" }} />
                  2
                  <img src="https://i.pinimg.com/originals/75/b7/87/75b787e99b42d53d79fd90050668397f.jpg" alt="icon" style={{ width: "50px", borderRadius: "80px" }} />
                  4
                  <img src="https://i.pinimg.com/originals/a9/23/80/a92380a8e38e832687334deeddfb2af9.png" alt="icon" style={{ width: "75px", borderRadius: "80px" }} />
                  5
                  </Row>

                </div>
                <div className="tien-card-bottom">
                  <div >Wrote</div>
                  <div>March</div>
                </div>
              </div>
            </Container>




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
