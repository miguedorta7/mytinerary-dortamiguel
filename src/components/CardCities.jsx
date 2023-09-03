
import Card from 'react-bootstrap/Card';
import { Link as Anchor } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function BasicExample({src,text,cityId}) {
  return (
    <Card className='card-city' style={{ width: '18rem' }}>
      <Anchor className='card-imagen-container' to={'/city/'+cityId}>
      <Card.Img className='card-imagen' variant="top" src={src} />
      </Anchor>
      <Card.Body className='cardbody-city'>
        <Card.Title className='title-card-cities'> <img className='ubicacion ' src="/img/location_map_pin_mark_icon_148685.png" alt="" />{text}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
