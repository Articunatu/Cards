import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CardCell({ title, description, onEdit, onDelete }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary" onClick={onEdit} className="me-2">
                    Ändra
                </Button>
                <Button variant="danger" onClick={onDelete}>
                    Radera
                </Button>
            </Card.Body>
        </Card>
    );
}

export default CardCell;
