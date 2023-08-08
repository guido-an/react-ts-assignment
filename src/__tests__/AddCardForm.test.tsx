import { render, screen, fireEvent } from '@testing-library/react';
import AddCardForm from '../components/AddCardForm';

describe('Test AddCardForm component', () => {
  test('should submit the form with correct data', () => {
    // Create a mock function for the addNewCard prop
    const mockAddNewCard = jest.fn();

    // Mock the logged-in user
    const loggedInUser = { name: 'John Doe', id: '123' };

    // Render the AddCardForm component with the mock function and the logged-in user as props
    render(<AddCardForm addNewCard={mockAddNewCard} loggedInUser={loggedInUser} />);

    // Fill in the form fields with test data using fireEvent.change
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Test Card' } });
    fireEvent.change(screen.getByLabelText(/status/i), { target: { value: 'Published' } });
    fireEvent.change(screen.getByLabelText(/content/i), { target: { value: 'This is a test card content.' } });
    fireEvent.change(screen.getByLabelText(/category/i), { target: { value: 'Technology' } });

    // Simulate form submission by clicking the submit button
    fireEvent.click(screen.getByTestId('add-card-button'));

    // Assert that the mock function is called with the correct data
    const { id, name } = loggedInUser

    expect(mockAddNewCard).toHaveBeenCalledWith({
      name: 'Test Card',
      status: 'Published',
      content: 'This is a test card content.',
      category: 'Technology',
      author: { id, name }, 
    });
  });
});
