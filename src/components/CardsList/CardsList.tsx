import React from 'react';
import { Card, Author } from '../../types';
import CardItem from '../CardItem/CardItem';
import './CardsList.scss'

interface CardsListProps {
  cards: Card[];
  loggedInUser: Author;
  updateCard: (card: Card) => void;
  deleteCard: (cardId: string) => void;
}

const CardsList: React.FC<CardsListProps> = ({ cards, loggedInUser, updateCard, deleteCard }) => {
  return (
    <div className='cards-list'>
      {cards.map((card, i) => (
        <CardItem
          key={i}
          card={card}
          loggedInUser={loggedInUser}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
    </div>
  );
};

export default CardsList;
