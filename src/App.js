import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import AddUserForm from './components/AddUserForm';
import Users from './components/Users';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      staffs:[
        {
          name: "abanga",
          contact: 1245789,
          type: 'ICT Department',
          comment: 'Please kindly improve the Internet access at the facility',
          id: "ieu787"
        },
        {
          name: "dangote",
          contact: 54872154,
          type: 'Finance Department',
          comment: 'We need increase in salary',
          id: "ncv485"
        }
      ]
    }
  };
  AddNewStaff =(staff) =>{
    staff.id= Math.random().toString()
    this.setState({
      staffs:[...this.state.staffs,staff]
    })
  }
  deleteStaff =(id) => {
    let undeletedComment = this.state.staffs.filter((staff)=> staff.id !==id )
      this.setState({
        staffs: undeletedComment
      })
  };
  editStaff =(id, updatedStaff) =>{
    this.setState({
      staffs:this.state.staffs.map(staff=>staff.id===id ? updatedStaff : staff)
    })
  }
  render() {
    return (
      <>
     
      <Container fluid style={{marginTop:'3rem'}} >
        <Row>
          <Col md="3" className="App-header">
            <h3><u>Register Your Comment Here</u></h3>
            <AddUserForm newStaff={this.AddNewStaff} />
          </Col>
          <Col>
          <Users staffData={this.state.staffs} deleteStaff={this.deleteStaff} editStaff={this.editStaff} />
          </Col>
        </Row>
      </Container>
        
      </>
    );
  }
}

export default App;

