import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
    <Button variant="primary" className="btn-view d-flex align-items-stretch">
      View More
    </Button>
  </Card.Body>
</Card>
  );
}







