import Tags from './Tags';
import Card from 'react-bootstrap/Card';

function MyCard({ image, title, description, genres }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Tags genres={genres} />
      </Card.Body>
    </Card>
  );
}

export default MyCard;