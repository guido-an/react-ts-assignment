import { render, screen, fireEvent } from '@testing-library/react';
import AddCardForm from '../components/AddCardForm/AddCardForm';

jest.mock('uuid', () => ({ v4: () => '123456789' }));

describe('Test AddCardForm component', () => {
  test('should submit the form with correct data and close the modal', () => {
    const mockAddNewCard = jest.fn();

    // Mock the logged-in user
    const loggedInUser = { name: 'John Doe', id: '123' };

    const mockSetIsModalOpen = jest.fn();

    render(
      <AddCardForm
        addNewCard={mockAddNewCard}
        loggedInUser={loggedInUser}
        setIsModalOpen={mockSetIsModalOpen}
      />
    );

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Test Card' } });
    fireEvent.change(screen.getByLabelText(/status/i), { target: { value: 'Published' } });
    fireEvent.change(screen.getByLabelText(/content/i), { target: { value: 'This is a test card content.' } });
    fireEvent.change(screen.getByLabelText(/category/i), { target: { value: 'Technology' } });

    fireEvent.click(screen.getByTestId('add-card-button'));

    const { id, name } = loggedInUser;

    expect(mockAddNewCard).toHaveBeenCalledWith({
      id: '123456789', 
      name: 'Test Card',
      status: 'Published',
      content: 'This is a test card content.',
      category: 'Technology',
      author: { id, name },
    });

    expect(mockSetIsModalOpen).toHaveBeenCalledWith(false);
  });
});
