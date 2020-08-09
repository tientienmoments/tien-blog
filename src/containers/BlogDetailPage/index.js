import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { blogActions } from "../../redux/actions";
import Markdown from "react-markdown";
import Moment from "react-moment";
import { Button, Col, Row, Container } from "react-bootstrap";

import ClipLoader from "react-spinners/ClipLoader";
import ReviewBlog from "../../components/ReviewBlog";
import ReviewList from "../../components/ReviewList";
import { HTML5_FMT } from "moment";

const BlogDetailPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const blog = useSelector((state) => state.blog.selectedBlog);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const loading = useSelector((state) => state.blog.loading);
    const submitReviewLoading = useSelector(
        (state) => state.blog.submitReviewLoading
    );
    //edit blog
    const currentUser = useSelector((state) => state.auth.user);
    const [reviewText, setReviewText] = useState("");




    const handleInputChange = (e) => {
        setReviewText(e.target.value);
    };

    const handleSubmitReview = (e) => {
        e.preventDefault();
        dispatch(blogActions.createReview(blog._id, reviewText));
        setReviewText("");
    };

    useEffect(() => {
        if (params?.id) {
            dispatch(blogActions.getSingleBlog(params.id));
        }
    }, [dispatch, params]);

    return (
        <>
            {loading ? (
                <ClipLoader color="#f86c6b" size={150} loading={loading} />
            ) : (
                    <Container>
                        <div className="tien-detail-page">
                            <div className="tien-detail-page-top"></div>
                            <div className="tien-detail-page-bottom"></div>
                            <div className="tien-detail-style ">
                                {blog && (
                                    <Col className="mb-5">
                                        <Row className="tien-blog-detail-title">
                                            <div>{blog.title}</div>
                                        </Row>

                                        {currentUser?._id === blog?.user?._id ? (

                                            <Link to={`/blog/edit/${blog._id}`}>
                                                <Row className="tien-edit-button-line">
                                                    <Button style={{ margin: "0px" }} variant="info">Edit</Button>
                                                </Row>
                                            </Link>

                                        ) : (
                                                <p className="d-flex justify-content-center text-muted" style={{fontSize:"18px"}}>
                                                    @{blog?.user?.name} <span style={{marginLeft:"5px", marginRight:"5px"}}> wrote </span>
                                                  <Moment fromNow><span> {blog.createdAt} </span></Moment>
                                                </p>
                                            )}
                                        <hr />
                                        <div className="tien-detail-content">
                                            <Markdown className="tien-source-style" source={blog.content} />
                                        </div>
                                        <hr />
                                        <ReviewList reviews={blog.reviews} />
                                    </Col>
                                )}

                                {isAuthenticated && (
                                    <ReviewBlog
                                        reviewText={reviewText}
                                        handleInputChange={handleInputChange}
                                        handleSubmitReview={handleSubmitReview}
                                        loading={submitReviewLoading}
                                    />
                                )}
                            </div>
                        </div>
                    </Container>
                )}
        </>
    );
};

export default BlogDetailPage;
