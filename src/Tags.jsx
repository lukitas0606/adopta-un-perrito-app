import React from 'react';
import Badge from 'react-bootstrap/Badge';

function Tags(props) {
  return (
    <Badge variant={props.backgroundColor}>
      {props.text}
    </Badge>
  );
}

export default Tags;