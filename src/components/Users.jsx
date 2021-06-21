import React from 'react';
import User from './User';
import { Container, Row } from 'react-bootstrap'

const Users = (props) => {
    return (

        <Container>
            <Row>
                {
                    props.staffData.map((staff) => {
                        return <User
                            staffInfo={staff}
                            key={staff.id}
                            deleteStaff={props.deleteStaff}
                            editStaff={props.editStaff}
                        />
                    })
                }
            </Row>
        </Container>


    );
}

export default Users;
