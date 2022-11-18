import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LiftSideNav from '../LeftSide/LiftSideNav';

import RigthSide from '../Shared/RigthSide';
import './Courses.css'
const Courses = () => {
    const data = useLoaderData()
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4" className='d-none d-lg-block'>
                    <LiftSideNav></LiftSideNav>
                    </Col>
                    <Col lg="8">
                    <RigthSide data ={data}> </RigthSide>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;