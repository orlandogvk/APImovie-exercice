import React from 'react';
import Col from 'react-bootstrap/Col';
import Cardr from 'react-bootstrap/Card';

export default function Card({movie}) {
    return (
        <Col md="4">
            <Cardr style={{ width: '18rem' }}>
            <Cardr.Img variant="top" src={movie.Poster} alt={movie.Title} />
            <Cardr.Body>
                <Cardr.Title>{movie.Title} {movie.Year}</Cardr.Title>
                <Cardr.Text>{movie.Type}</Cardr.Text>
            </Cardr.Body>
            </Cardr>
        </Col>
    )
}
