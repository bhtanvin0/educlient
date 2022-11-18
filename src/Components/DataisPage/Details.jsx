import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { BsFillPeopleFill } from "react-icons/bs";
import './Details.css'

const Details = () => {
    const data = useLoaderData();
    const { id, taitle, img, detail, rating, student } = data;
    console.log(data);
    return (
        <div className='details-card'>
            <Card.Body>
                <Card.Title>{taitle}</Card.Title>
                <Card.Img variant="top" src={img} />
                <Card.Text>
                    {detail.length > 200 ?
                        <p>{detail}</p>
                        :
                        <p>{detail}</p>
                    }
                </Card.Text>
                <Card.Text>
                    <Link to={`/checkout/${id}`}>
                        <button className='btn btn-primary'>Get Premium Access</button>
                    </Link>
                </Card.Text>

            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div>
                    <FaStar className='text-warning'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <BsFillPeopleFill></BsFillPeopleFill>
                    <span>{student ? student : ''}</span>
                </div>
            </Card.Footer>
        </div>
    );
};

export default Details;