import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DeleteCardButton from '../components/DeleteCardButton';

describe('Test DeleteCardButton component', () => {
  test('should call deleteCard function with correct cardId when confirming', () => {
    const mockDeleteCard = jest.fn();
    const cardId = '123';

    render(<DeleteCardButton deleteCard={() => mockDeleteCard(cardId)} />);

    fireEvent.click(screen.getByText('Delete'));
    fireEvent.click(screen.getByText('Confirm'));

    expect(mockDeleteCard).toHaveBeenCalledWith(cardId);
  });
});
