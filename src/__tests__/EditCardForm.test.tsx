import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditCardForm from '../components/EditCardForm/EditCardForm';
import { Card, Status, Category, Author } from '../types';

describe('Test EditCardForm component', () => {
  test('should update card details when clicking "Save"', () => {
    const loggedInUser: Author = { name: 'John Doe', id: '123' };

    const card: Card = {
      id: '123',
      name: 'Initial Card',
      status: Status.Published,
      content: 'Initial content',
      category: Category.Technology,
      author: loggedInUser,
    };

    const mockOnSave = jest.fn();

    render(<EditCardForm card={card} onSave={mockOnSave} />);

    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'Updated Card' } });
    fireEvent.change(screen.getByLabelText('Content:'), { target: { value: 'Updated content' } });
    fireEvent.change(screen.getByLabelText('Status:'), { target: { value: 'Draft' } });
    fireEvent.change(screen.getByLabelText('Category:'), { target: { value: 'Physics' } });

    fireEvent.click(screen.getByText('SAVE'));

    expect(mockOnSave).toHaveBeenCalledWith({
      id: '123',
      name: 'Updated Card',
      status: Status.Draft,
      content: 'Updated content',
      category: Category.Physics,
      author: loggedInUser,
    });
  });
});
