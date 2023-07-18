import React from 'react';
import { Card, Col, Row, Image, ListGroup, Accordion } from 'react-bootstrap';

import avatar from '../assets/avatar.png';

const Post = ({ title, text, comments }) => {
    return (
        <Row className="justify-content-center">
            <Col md={8} lg={6}>
                <Card className="mb-2 mt-2">
                    <Card.Body>
                        <Row className="align-items-center">
                            <Col xs="auto" className="pe-0">
                                <Image src={avatar} />
                            </Col>
                            <Col>
                                <Card.Title className="mb-0">{title}</Card.Title>
                            </Col>
                        </Row>
                        <Card.Text>{text}</Card.Text>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Comments:</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup>
                                        {comments.map((comment, index) => (
                                            <ListGroup.Item key={index}>
                                                <span className="fw-bold">{comment.email}:</span> {comment.text}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Post;
