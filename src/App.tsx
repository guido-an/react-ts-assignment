import React, { useState } from 'react';
import { Card, Status, Category, Author } from './types';
import AddCardForm from './components/AddCardForm';
import presetData from './presetData';
import CardItem from './components/CardItem';

// This is a mock logged-in user (for simulating the edit functionality)
const loggedInUser: Author = { name: 'John Doe', id: '123' }; 

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>(presetData);

  const addNewCard = (newCard: Card) => {
    setCards([...cards, newCard]);
  };

  return (
    <div>
      <h1>Mini-Blog Application</h1>
      <AddCardForm addNewCard={addNewCard} loggedInUser={loggedInUser} />
      <div>
        {cards.map((card, index) => (
          <CardItem card={card} loggedInUser={loggedInUser} />
        ))}
        
      </div>
    </div>
  );
};

export default App;
