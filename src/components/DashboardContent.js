import React, { useEffect, useState } from 'react'
import { dashboardAction } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button } from 'react-bootstrap'

export default function DashboardContent({ page }) {
    const dispatch = useDispatch();
    const [pageDashboard, setPageDashboard] = useState(page)
    const loading = useSelector((state) => state.dashboard.loading)
    const blogs = useSelector((state) => state.dashboard.blogs)
    const friends = useSelector((state) => state.dashboard.friends)
    const total_blogs = useSelector((state) => state.dashboard.total_blogs)
    const total_friends = useSelector((state) => state.dashboard.total_friends)

    const loadContent = (page) => {
        switch (page) {
            case "dashboard":
                dispatch(dashboardAction.blogsRequest())
                dispatch(dashboardAction.getCurrentUser())
                setPageDashboard(page)
                break;
            case "blogs":
                dispatch(dashboardAction.blogsRequest())
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
        loadContent(pageDashboard)
    }, [pageDashboard])

    return (
        <div>
            {page === 'dashboard' ?
                <div>
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
                    <div>
                        <h1>Blogs Here</h1>
                        {blogs.length ? blogs.map(blog => {
                            return (
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>
                                            {blog.content.length < 100 ? blog.content : blog.content.slice(0, 97) + '...'}
                                        </Card.Text>
                                        <Link to={`/blog/edit/${blog._id}`}>
                                            <Button variant="primary">Edit</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            )
                        }) :
                            <p>There is no blog</p>}
                    </div>
                    :
                    <div>
                        <h1>Friend Here</h1>
                        {friends.length ?
                            <p>Avatar | Name </p>
                            : <p>You have no friends</p>}
                    </div>

            }
        </div>
    )
}
