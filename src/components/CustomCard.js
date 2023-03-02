import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CustomCard = ({searchMovie}) => {
    return (
        <Card style={{ width: '18rem', color: "black" }}>
        <Card.Img variant="top" src={searchMovie?.Poster} />
        <Card.Body>
          <Card.Title>{searchMovie?.Title}</Card.Title>
          <Card.Text>{searchMovie?.Plot}</Card.Text>
          
          <div className="d-flex justify-content-between">
            <Button variant="success">Happy</Button>
            <Button variant="warning">Lazy</Button>
          </div>
<div className="d-grid">
          <Button variant="danger">Delete</Button>
          </div>
        </Card.Body>
      </Card>
    )

}