import React, { useState } from 'react';
import { Card, Status, Category, Author } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface AddCardFormProps {
  addNewCard: (newCard: Card) => void;
  loggedInUser: Author; 
}

const getInitialFormData = (loggedInUser: Author): Card => ({
    id: '', 
    name: '',
    status: Status.Published,
    content: '',
    category: Category.Other,
    author: loggedInUser,
  });
  
  const AddCardForm: React.FC<AddCardFormProps> = ({ addNewCard, loggedInUser }) => {
    const [formData, setFormData] = useState<Card>(getInitialFormData(loggedInUser));
  
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const cardWithAuthor = { ...formData, author: loggedInUser, id: uuidv4() }; // Generate ID here
        addNewCard(cardWithAuthor);
        setFormData(getInitialFormData(loggedInUser));
      };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
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
     {/* <>
       <input 
          type="text" 
          name="id" 
          onChange={handleChange} 
          value={uuidv4()} 
          data-testid="card-id" 
          hidden />
     </> */}
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
      <button type="submit" data-testid="add-card-button">Add Card</button>
    </form>
  );
};

export default AddCardForm;
