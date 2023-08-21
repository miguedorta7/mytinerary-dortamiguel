import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// eslint-disable-next-line react/prop-types
function BasicExample({src,text}) {
  return (
    <Card className='card-city' style={{ width: '18rem' }}>
      <Card.Img className='card-imagen' variant="top" src={src} />
      <Card.Body className='cardbody-city'>
        <Card.Title>{text}</Card.Title>
        <Button className='btn-card' variant="primary">View More</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;