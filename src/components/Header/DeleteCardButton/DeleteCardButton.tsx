import React from 'react';
import './DeleteCardButton.scss'

interface DeleteCardButtonProps {
  deleteCard: () => void;
}

const DeleteCardButton: React.FC<DeleteCardButtonProps> = ({ deleteCard }) => {
  const askConfirmation = () => {
    const confirmMessage = 'Are you sure you want to delete this card?';
    const isConfirmed = window.confirm(confirmMessage);

    if (isConfirmed) {
      deleteCard();
    }
  };

  return (
    <div className="delete-card-wrapper">
      <button onClick={askConfirmation}>DELETE</button>
    </div>
  );
};

export default DeleteCardButton;
