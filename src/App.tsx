import React from 'react';
import { Card, Author } from './types';
import presetData from './presetData';
import useLocalStorage from './hooks/useLocalStorage';
import Layout from './components/Layout/Layout';
import CardsList from './components/CardsList/CardsList';

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
       <CardsList
        cards={cards}
        loggedInUser={loggedInUser}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    </Layout>
  );
};

export default App;
