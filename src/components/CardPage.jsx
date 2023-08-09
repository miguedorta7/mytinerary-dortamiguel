import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link as Anchor } from "react-router-dom";

export default function CardPage() {
  return (
    <Card>
  <Card.Header as="h1">Find your perfect trip, designed by insiders whi know and love their cities</Card.Header>
  <Card.Body>
    <Card.Text className="card-text ">
      Our app will help you find the path for you next trip. With an easy-to-use
      interfase and a host of itinerary options, planning your next trip has
      never been easier.
    </Card.Text>
    <div className='container-img-card'>


    <img className='imagen-card' src="public\img\backgroundLog.jpg" alt="" />
    </div>
    <Button  variant="primary" className="btn-view d-flex align-items-stretch" as={Anchor} to={"/cities"}>
      View More
    </Button>
  </Card.Body>
</Card>
  );
}







