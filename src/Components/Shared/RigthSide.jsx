
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
const RigthSide = (props) => {
    const data = props.data

    console.log(data)
    const [courses, setCourses] = useState([]);



    const { ProviderLogin } = useContext(AuthContext);




    useEffect(() => {
        fetch('https://edu-server-tau.vercel.app/courses-category')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <Row xs={1} md={2} className="g-4">
            {data.map((item) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.detail.slice(0, 80) + '....'}
                            </Card.Text>
                            <Link to={`/details/${item.id}`}>
                                <Button> see details</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>

            ))}
        </Row>
    );
};

export default RigthSide;