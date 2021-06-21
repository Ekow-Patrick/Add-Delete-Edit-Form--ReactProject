
import React, { Component } from 'react';
import {Form,Button } from 'react-bootstrap';

class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            contact: '',
            type: '',
            comment: '',
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
        this.props.newStaff(this.state);
        this.setState({
            name: "",
            contact: "",
            type: "",
            comment: ""
        })
        console.log(this.state)
    }
    render() {
        return (
            <div>
                
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label><h4>Staff Name</h4> </Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name" name="name" value={this.state.name} onChange={this.handleChange} />
                    </Form.Group><br/>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label><h4>Staff Contact Number</h4> </Form.Label>
                        <Form.Control type="number" placeholder="Enter contact number here" name="contact" value={this.state.contact} onChange={this.handleChange}/>
                    </Form.Group><br/>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label><h4>Select Department Type</h4></Form.Label><br/>
                        <select name="type" value={this.state.type} onChange={this.handleChange}>
                            <option value="select"> Select Department</option>
                            <option value="Human Resouce Department"> Human Resource Department</option>
                            <option value="ICT Department"> ICT Department</option>
                            <option value="Finance Department"> Finance Department</option>
                        </select>
                    </Form.Group><br/>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label><h4>Leave Comment</h4> </Form.Label> <br/>
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

export default AddUserForm;
