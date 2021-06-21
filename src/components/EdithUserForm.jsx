
import React, { Component } from 'react';
import {Form,Button } from 'react-bootstrap';

class EdithUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.staffInfo.name,
            contact: props.staffInfo.contact,
            type: props.staffInfo.type,
            comment: props.staffInfo.comment,
            id: props.staffInfo.id
        }
    }
    handleChange = (e) =>{
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.editStaff(this.state.id, this.state);
        this.setState({
            name: "",
            contact: "",
            type: "",
            comment: ""
        })
        this.props.closeModal();
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Staff Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name" name="name" value={this.state.name} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Staff Contact Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter contact number here" name="contact" value={this.state.contact} onChange={this.handleChange}/>
                    </Form.Group><br/>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Select Department Type</Form.Label><br/>
                        <select name="type" value={this.state.type} onChange={this.handleChange}>
                            <option value="select"> Select Department</option>
                            <option value="Human Resouce Department"> Human Resource Department</option>
                            <option value="ICT Department"> ICT Department</option>
                            <option value="Finance Department"> Finance Department</option>
                        </select>
                    </Form.Group><br/>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Leave Comment </Form.Label> <br/>
                        <textarea required placeholder="Pleae Enter your Comment or Suggestion here" name="comment" value={this.state.comment} onChange={this.handleChange} />
                    </Form.Group>
                    <br />
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>

                </Form>
            </div>
        );
    }
}

export default EdithUserForm;

