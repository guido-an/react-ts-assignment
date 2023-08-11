// CardItem.tsx (Refactored)
import React, { useState } from 'react';
import { Card, Author } from '../../types';
import DeleteCardButton from '../DeleteCardButton/DeleteCardButton';
import Modal from '../../shared/Modal/Modal';
import EditCardForm from '../EditCardForm/EditCardForm';

interface CardItemProps {
  card: Card;
  loggedInUser: Author;
  updateCard: (card: Card) => void;
  deleteCard: (cardId: string) => void;
}

const CardItem: React.FC<CardItemProps> = ({ card, loggedInUser, updateCard, deleteCard }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => {
    if (loggedInUser.id === card.author.id) {
      setIsEditMode(true);
    }
  };

  const handleSaveClick = (editedCard: Card) => {
    updateCard(editedCard);
    setIsEditMode(false);
  };

  return (
    <div>
      <h2>{card.name}</h2>
      <div>Status: {card.status}</div>
      <div>Content: {card.content}</div>
      <div>Category: {card.category}</div>
      <div>Author: {card.author.name}</div>
      {!isEditMode && loggedInUser.id === card.author.id && (
        <button onClick={handleEditClick} data-testid="edit">Edit</button>
      )}
      {isEditMode && (
        <Modal isOpen={isEditMode} onClose={() => setIsEditMode(false)}>
          <EditCardForm card={card} onSave={handleSaveClick} />
          <DeleteCardButton deleteCard={() => deleteCard(card.id)} />
        </Modal>
      )}
    </div>
  );
};

export default CardItem;
