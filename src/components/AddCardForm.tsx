import React, { useState } from 'react';
import { Card, Status, Category, Author } from '../types';

interface AddCardFormProps {
  addNewCard: (newCard: Card) => void;
  loggedInUser: Author; 
}

const getInitialFormData = (): Card => ({
  name: '',
  status: Status.Published,
  content: '',
  category: Category.Other,
  author: { name: '', id: '' },
});

  
const AddCardForm: React.FC<AddCardFormProps> = ({ addNewCard }) => {
  const [formData, setFormData] = useState<Card>(getInitialFormData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNewCard(formData);
    setFormData(getInitialFormData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData: Card) => ({ ...prevFormData, [name]: value }));
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prevFormData: Card) => ({ ...prevFormData, status: value as Status }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prevFormData: Card) => ({ ...prevFormData, category: value as Category }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <select id="status" name="status" value={formData.status} onChange={handleStatusChange}>
          {Object.values(Status).map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={formData.category} onChange={handleCategoryChange}>
          {Object.values(Category).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author.name}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" data-testid="add-card-button">Add Card</button>
    </form>
  );
};

export default AddCardForm;
