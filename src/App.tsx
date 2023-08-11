import React from 'react';
import { Card, Author } from './types';
import AddCardForm from './components/AddCardForm/AddCardForm';
import CardItem from './components/CardItem/CardItem';
import presetData from './presetData';
import useLocalStorage from './hooks/useLocalStorage';
import Layout from './components/Layout/Layout';

const loggedInUser: Author = { name: 'John Doe', id: '123' };

const App: React.FC = () => {
  const [cards, setCards] = useLocalStorage('cards', presetData);

  const addNewCard = (newCard: Card) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const updateCard = (updatedCard: Card) => {
    const updatedCards = cards.map((card) =>
      card.id === updatedCard.id ? updatedCard : card
    );
    setCards(updatedCards);
  };

  const deleteCard = (cardId: string) => {
    const updatedCards = cards.filter((card) => card.id !== cardId);
    setCards(updatedCards);
  };

  return (
      <Layout addNewCard={addNewCard} loggedInUser={loggedInUser}>
        <div>
          {cards.map((card, index) => (
            <CardItem key={index} card={card} loggedInUser={loggedInUser} updateCard={updateCard} deleteCard={deleteCard} />
          ))}
        </div>
      </Layout>
  );
};

export default App;
