import React, { useState } from 'react';
import { Card, Status, Category } from '../../types';
import './EditCardForm.scss';

interface EditCardFormProps {
  card: Card;
  onSave: (editedCard: Card) => void;
}

const EditCardForm: React.FC<EditCardFormProps> = ({ card, onSave }) => {
  const [editedCard, setEditedCard] = useState<Card>({ ...card });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedCard({ ...editedCard, name: e.target.value });
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedCard({ ...editedCard, content: e.target.value });
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEditedCard({ ...editedCard, status: e.target.value as Status });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEditedCard({ ...editedCard, category: e.target.value as Category });
  };

  const handleSaveClick = () => {
    onSave(editedCard);
  };

  return (
    <div className="edit-card-form">
      <div className="form-group">
        <label htmlFor="edit-name">Name:</label>
        <input
          id="edit-name"
          className="input"
          type="text"
          value={editedCard.name}
          onChange={handleNameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="edit-content">Content:</label>
        <textarea
          id="edit-content"
          className="textarea"
          value={editedCard.content}
          onChange={handleContentChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="edit-status">Status:</label>
        <select
          id="edit-status"
          className="select"
          value={editedCard.status}
          onChange={handleStatusChange}
        >
          {Object.values(Status).map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="edit-category">Category:</label>
        <select
          id="edit-category"
          className="select"
          value={editedCard.category}
          onChange={handleCategoryChange}
        >
          {Object.values(Category).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button className="form-button" onClick={handleSaveClick}>
        SAVE
      </button>
    </div>
  );
};

export default EditCardForm;
