import React, { useState, useEffect } from "react";
import PublicNavbar from '../PublicNavbar/index'
import { Row, Col } from 'react-bootstrap'
import DashboardContent from '../../components/DashboardContent'
import './style.css'


const DashboardPage = () => {
    const [page, setPage] = useState('dashboard')
    const handleOnClickDashboard = () => {
        setPage('dashboard')
    }
    const handleOnClickBlogs = () => {
        setPage('blogs')
    }
    const handleOnClickFriends = () => {
        setPage('friends')
    }

    useEffect(() => {
    }, [page])

    return (
        <div>
            <PublicNavbar />
            <div className="dashboard-area border-red">
                <Row>
                    <Col className="dashboard-left-menu border-red" md={3}>
                        <div className="dashboard-user-area">
                            <img className="dashboard-avatar" src="https://avatarfiles.alphacoders.com/117/117512.png" />
                            <p className="dashboard-user">Dung DANG</p>
                        </div>
                        <div className="dashboard-menu-area">
                            <Row className="dashboard-menu-item" onClick={() => handleOnClickDashboard()}>
                                <Col md={2}><i class="fas fa-tachometer-alt"></i></Col>
                                <Col md={10}><span>Dashboard</span></Col>
                            </Row>
                            <Row className="dashboard-menu-item" onClick={() => handleOnClickBlogs()}>
                                <Col md={2}><i class="fas fa-blog"></i></Col>
                                <Col md={10}><span>Blogs</span></Col>
                            </Row>
                            <Row className="dashboard-menu-item" onClick={() => handleOnClickFriends()}>
                                <Col md={2}><i class="fas fa-user-friends"></i> </Col>
                                <Col md={10}><span>Friends</span></Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={9}>
                        <DashboardContent page={page} />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default DashboardPage;
