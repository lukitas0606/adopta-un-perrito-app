import React from 'react';
import Card from 'react-bootstrap/Card';
import Tags from './Tags';

function Cards(props) {
  return (
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imageSrc} alt={props.imageAlt} style={{ maxWidth: '100%' }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Tags backgroundColor={props.tagBackgroundColor} text={props.tagText} />
      </Card.Body>
    </Card>
  );
}

export default Cards;