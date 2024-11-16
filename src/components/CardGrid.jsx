import CardCell from './CardCell';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CardGrid = ({ cards, onEdit, onDelete }) => {
    return (
        <div className='card-grid'>
            <Row xs={1} md={5} className="g-4">
            {cards.map((card, index) => (
                <Col key={index}>
                <CardCell
                    title={card.title}
                    description={card.description}
                    onEdit={() => onEdit(index)}
                    onDelete={() => onDelete(index)}
                />
                </Col>
            ))}
            </Row>
        </div>
    );
};

export default CardGrid;


