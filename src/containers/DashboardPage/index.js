import React, { useState, useEffect } from "react";
import PublicNavbar from '../PublicNavbar/index'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import DashboardContent from '../../components/DashboardContent'
import './style.css'
import NameEditModal from '../../components/NameEditModal'
import UpdateAvatarModal from '../../components/UpdateAvatarModal'
import ClipLoader from "react-spinners/ClipLoader";

const DashboardPage = () => {
    const loading = useSelector((state) => state.auth.loading);
    const [page, setPage] = useState('dashboard')
    const [showModalName, setShowModalName] = useState(false)
    const [showModalAvatar, setShowModalAvatar] = useState(false)
    const user = useSelector(state => state.auth.user)
    console.log("tien check user dasboard ", user);
    console.log("user avatar", user.user.avatar)
    
    const handleOnClickDashboard = () => {
        setPage('dashboard')
    }
    const handleOnClickBlogs = () => {
        setPage('blogs')
    }
    const handleOnClickFriends = () => {
        setPage('friends')
    }
    const handleOnClickName = () => {
        setShowModalName(true)
    }
    const handleOnClickImage = () => {
        console.log('handleOnClickImage')
        setShowModalAvatar(true)
    }

    useEffect(() => {
    }, [page])

    return (
        <div>
            <PublicNavbar />
            {loading ? (
                <div style={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center" }}>
                    <ClipLoader color="#f86c6b" size={150} loading={loading} />
                </div>

            ) :
                <div className="dashboard-area">
                    <NameEditModal
                        showModal={showModalName}
                        setShowModal={setShowModalName}
                    />
                    <UpdateAvatarModal
                        showModal={showModalAvatar}
                        setShowModal={setShowModalAvatar}
                        img={user.user.avatar} />
                    <Row>
                        <Col className="dashboard-left-menu" md={3}>
                            <div className="dashboard-user-area">
                                <img className="dashboard-avatar" src={user.user.avatar} onClick={() => handleOnClickImage()} alt="" />
                                <p className="dashboard-user" onClick={() => handleOnClickName()}>{user.user.name}</p>
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
                            <DashboardContent page={page} userId={user._id} blogDetail={user.blogs} />
                        </Col>
                    </Row>
                </div>
            }
        </div>
    );
};

export default DashboardPage;
