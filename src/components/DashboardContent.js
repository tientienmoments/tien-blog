import React, { useEffect, useState } from 'react'
import { dashboardAction } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button } from 'react-bootstrap'
// import { blogActions } from "../redux/actions";
// import { useParams } from "react-router-dom";
import './DashboardContent.css'


export default function DashboardContent({ page, userId, blogDetail }) {
    // const params = useParams();
    const dispatch = useDispatch();
    const [pageDashboard, setPageDashboard] = useState(page)
    const [loading, setLoading] = useState(false)

    const blogs = useSelector((state) => state.dashboard.blogs)

    const total_blogs = blogDetail.length;

    console.log("dasboard total blogs", total_blogs)

    const friends = useSelector((state) => state.dashboard.friends)
    const total_friends = useSelector((state) => state.dashboard.total_friends)

    const loadContent = (page) => {
        switch (page) {
            case "dashboard":
                dispatch(dashboardAction.blogsRequest(userId))
                dispatch(dashboardAction.getCurrentUser())
                setPageDashboard(page)
                break;
            case "blogs":
                dispatch(dashboardAction.blogsRequest(userId))
                setPageDashboard(page)
                break;
            case "friends":
                dispatch(dashboardAction.getCurrentUser())
                setPageDashboard(page)
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        loadContent(pageDashboard);
        setLoading()

    }, [pageDashboard])


    if (loading || !blogs) {
        return <div>loading</div>
    }
    return (
        <div>
            {page === 'dashboard' ?
                <div style={{ display: "none !important" }}>
                    <h1>Dashboard</h1>
                    <Row>
                        <Col>
                            <p>Total blogs: {total_blogs}</p>
                        </Col>
                        <Col>
                            <p>Total friends: {total_friends}</p>
                        </Col>
                    </Row>
                </div>
                : page === 'blogs' ?
                    <div >
                        <h1>Blogs</h1>
                        <div className="dashboard-blog-area">
                            {blogDetail.length ? blogDetail.map(blog => {
                                return (
                                    <Card className="tien-single-blog">
                                        <Card.Body>
                                            <Card.Title>{blog.title}</Card.Title>
                                            <Card.Text>
                                                {blog.content.length < 100 ? blog.content : blog.content.slice(0, 200) + '...'}
                                            </Card.Text>
                                            <Link to={`/blogs/${blog._id}`}>
                                                <Button style={{ backgroundColor: "#cf7b7b", border: "none" }}>Read</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                )
                            }) :
                                <p>There is no blog</p>}
                        </div>
                    </div>
                    :
                    <div>
                        <h1>Friends</h1>
                        {friends.length ?
                            <p>Avatar | Name </p>
                            : <p>You have no friends</p>}
                    </div>

            }
        </div>
    )
}

