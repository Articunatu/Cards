import { useState } from 'react';
import CardGrid from './components/CardGrid';
import CardForm from './components/CardForm';
import Header from './components/Header'
import Footer from './components/Footer'
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [cards, setCards] = useLocalStorage('cards', []);
  const [editingCard, setEditingCard] = useState(null);

  const addCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const deleteCard = (index) => {
    setCards((prevCards) => prevCards.filter((_, i) => i !== index));
  };

  const startEditing = (index) => {
    setEditingCard({ index, ...cards[index] });
  };

  const saveCard = (updatedCard) => {
    setCards((prevCards) =>
      prevCards.map((card, i) => (i === editingCard.index ? updatedCard : card))
    );
    setEditingCard(null);
  };

  return (
    <div className='app'>
      <Header/>
      {!editingCard ? (
        <CardForm addCard={addCard} />
      ) : (
        <CardForm addCard={saveCard} editingCard={editingCard} />
      )}
      <CardGrid
        cards={cards}
        onEdit={startEditing}
        onDelete={deleteCard}
      />
      <Footer/>
    </div>
  );
};

export default App;
