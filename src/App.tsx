import React from 'react';
import { Card, Author } from './types';
import AddCardForm from './components/AddCardForm';
import CardItem from './components/CardItem';
import presetData from './presetData';
import useLocalStorage from './hooks/useLocalStorage';

const loggedInUser: Author = { name: 'John Doe', id: '123' };

const App: React.FC = () => {
  const [cards, setCards] = useLocalStorage('cards', presetData);

  const addNewCard = (newCard: Card) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <div>
      <h1>Mini-Blog Application</h1>
      <AddCardForm addNewCard={addNewCard} loggedInUser={loggedInUser} />
      <div>
        {cards.map((card, index) => (
          <CardItem key={index} card={card} loggedInUser={loggedInUser} />
        ))}
      </div>
    </div>
  );
};

export default App;
