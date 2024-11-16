import { useState, useEffect, useRef } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const CardForm = ({ addCard, editingCard }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const titleInputRef = useRef(null);

    useEffect(() => {
        if (editingCard) {
        setTitle(editingCard.title);
        setDescription(editingCard.description);
        titleInputRef.current.focus();
        } else {
        titleInputRef.current.focus(); 
        }
    }, [editingCard]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) {
        alert('Både titel och beskrivning krävs.');
        titleInputRef.current.focus(); 
        return;
        }

        addCard({ title, description });
        setTitle('');
        setDescription('');
        titleInputRef.current.focus();
    };

    return (
        <Container className="card-form-container">
        <Row className="justify-content-center">
            <Col xs={12} md={6} lg={4}>
            <Form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
                <h4 className="text-center mb-4">
                {editingCard ? 'Ändra kortet' : 'Lägg till ett nytt kort'}
                </h4>
                <Form.Group className="mb-3">
                <Form.Label>Rubrik</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ange en titel"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    ref={titleInputRef} 
                />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Beskrivning</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Ange en beskrivning"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-40">
                {editingCard ? 'Spara' : 'Lägg till'}
                </Button>
            </Form>
            </Col>
        </Row>
        </Container>
    );
};

export default CardForm;
