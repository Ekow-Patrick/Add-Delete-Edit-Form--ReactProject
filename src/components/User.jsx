import React, {useState} from 'react';
import { Card, Col, Button,Modal } from 'react-bootstrap'
import EdithUserForm from './EdithUserForm';

const User = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleDelete = (e) => {
        e.preventDefault()
        console.log('data deleted')
        props.deleteStaff(props.staffInfo.id)
    }
    return (
        <>
           
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Comment Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EdithUserForm staffInfo={props.staffInfo} editStaff={props.editStaff} closeModal={handleClose} />
                </Modal.Body>
                
            </Modal>
            <Col md='3' style={{ marginBottom: '1rem' }}>
                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Header>Staff Comment Id: {props.staffInfo.id} </Card.Header>
                    <Card.Body>
                        <Card.Title>Name: {props.staffInfo.name} </Card.Title>
                        <Card.Title>Contact: {props.staffInfo.contact} </Card.Title>
                        <Card.Title>Unit: {props.staffInfo.type} </Card.Title>
                        <Card.Text>
                            <h5><u>Comment Indicated</u></h5>
                            <p> {props.staffInfo.comment} </p>
                        </Card.Text>
                        <Card.Link href="#"><Button size='sm' onClick={handleShow} >Edit Details</Button></Card.Link>
                        <Card.Link href="#"><Button variant="danger" size="sm" onClick={handleDelete} >Delete Details</Button></Card.Link>

                    </Card.Body>
                </Card>
            </Col>

        </>
    );
}

export default User;
