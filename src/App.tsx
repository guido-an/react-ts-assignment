import React, { useState } from 'react';
import { Card, Status, Category, Author } from './types';
import AddCardForm from './components/AddCardForm';
import presetData from './presetData';


// This is a mock logged-in user (for testing purposes)
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
          <div key={index}>
            <h2>{card.name}</h2>
            <p>Status: {card.status}</p>
            <p>Content: {card.content}</p>
            <p>Category: {card.category}</p>
            <p>Author: {card.author.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
