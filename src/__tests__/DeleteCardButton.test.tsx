import { render, screen, fireEvent } from '@testing-library/react';
import DeleteCardButton from '../components/shared/DeleteCardButton/DeleteCardButton';

describe('Test DeleteCardButton component', () => {
  test('should call deleteCard function with correct cardId when confirming', () => {
    const mockDeleteCard = jest.fn();
    const cardId = '123';

    const mockConfirm = jest.spyOn(window, 'confirm');
    mockConfirm.mockReturnValue(true);

    render(<DeleteCardButton deleteCard={() => mockDeleteCard(cardId)} />);

    fireEvent.click(screen.getByText(/delete/i));

    expect(mockDeleteCard).toHaveBeenCalledWith(cardId);

    mockConfirm.mockRestore();

  });
});
