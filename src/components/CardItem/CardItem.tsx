import React, { useState } from 'react';
import './CardItem.scss'; // Import the SCSS file
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
    <div className='card-item'>
      <div className='top'>
        <h2 id='card-name'>{card.name}</h2>
       <div className='top-right'>
          {!isEditMode && loggedInUser.id === card.author.id && (
          <button className='edit-button' onClick={handleEditClick} data-testid='edit'>
            Edit
          </button>
        )}
         <span className='status'>{card.status}</span>
       </div>
      </div>
       {isEditMode && (
        <Modal isOpen={isEditMode} onClose={() => setIsEditMode(false)}>
          <EditCardForm card={card} onSave={handleSaveClick} />
          <DeleteCardButton deleteCard={() => deleteCard(card.id)} />
        </Modal>
      )}
      <div className='card-content'>
        <p  id="category">{card.category}</p>
        <p id="content">{card.content}</p>
        <p id="author-name">{card.author.name}</p>
      </div>
  </div>
  );
};

export default CardItem;
