import React, { useState } from 'react';

interface DeleteCardButtonProps {
    deleteCard: () => void;
}

const DeleteCardButton: React.FC<DeleteCardButtonProps> = ({ deleteCard }) => {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleDeleteClick = () => {
    if (isConfirming) {
       deleteCard();
    } else {
      setIsConfirming(true);
    }
  };

  return (
    <div>
      {isConfirming ? (
        <>
          <p>Are you sure you want to delete this card?</p>
          <button onClick={deleteCard}>Confirm</button>
          <button onClick={() => setIsConfirming(false)}>Cancel</button>
        </>
      ) : (
        <button onClick={handleDeleteClick}>Delete</button>
      )}
    </div>
  );
};

export default DeleteCardButton;
