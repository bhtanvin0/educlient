import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import './checkout.css'
const Checkout = () => {
    const data = useLoaderData()
    const { id, taitle, img, detail, rating, student } = data;
    return (
        <div className='details-card'>
            <Card.Title><p className='para'>{data.taitle}</p></Card.Title>
            <Card.Img variant="top" src={data.img} />

            <Card.Text>
                {detail.length > 200 ?
                    <p>{detail}</p>
                    :
                    <p>{detail}</p>
                }
            </Card.Text>

            <Card className='card-details'>
                <Card.Body className='process-btn'>
                    <Button variant="primary" >Proceed To Checkout</Button>
                </Card.Body>
            </Card>

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
        </div >
    );
};

export default Checkout;