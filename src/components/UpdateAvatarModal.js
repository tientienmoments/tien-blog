import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { authActions } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import './UpdateAvatarModal.css'

export default function UpdateAvatarModal({ showModal, setShowModal, img }) {
    const loading = useSelector(state => state.auth.loading)
    const dispatch = useDispatch()
    const [url, setUrl] = useState(img)
    const [selectedFile, setSelectedFile] = useState(null)
    const handleOnClickSubmit = () => {
        dispatch(authActions.uploadAvatar(selectedFile))
        setShowModal(false)
    }
    const handleChangeImage = (e) => {
        var tmppath = URL.createObjectURL(e.target.files[0]);
        // var reader = new FileReader();
        // var url = reader.readAsDataURL(e.target.files[0]);
        // console.log(url) // Would see a path?
        // console.log('url:', url)
        console.log('tmppath:', tmppath)
        setUrl(tmppath)
        setSelectedFile(e.target.files[0])
    }
    return (
        <div>
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Change your avatar</Modal.Title>
                </Modal.Header>

                <Modal.Body className="avatar-body-area">
                    <img className="modal-avatar" src={url} alt="" />
                    <input
                        className="col-sm-12"
                        type="file"
                        accept="image/png, image/jpeg, image/jpg, image/gif"
                        // value={url}
                        onChange={(e) => handleChangeImage(e)}
                    />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    <Button variant="primary" onClick={() => handleOnClickSubmit()}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
