import { render, screen, fireEvent } from '@testing-library/react';
import AddCardForm from '../components/AddCardForm';

describe('AddCardForm', () => {
    test('should submit the form with correct data', () => {
        // Create a mock function for the addNewCard prop
        const mockAddNewCard = jest.fn();
    
        // Render the AddCardForm component with the mock function as the addNewCard prop
        render(<AddCardForm addNewCard={mockAddNewCard} />);
    
        // Fill in the form fields with test data using fireEvent.change
        fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Test Card' } });
        fireEvent.change(screen.getByLabelText(/status/i), { target: { value: 'Published' } });
        fireEvent.change(screen.getByLabelText(/content/i), { target: { value: 'This is a test card content.' } });
        fireEvent.change(screen.getByLabelText(/category/i), { target: { value: 'Technology' } });
        fireEvent.change(screen.getByLabelText(/author/i), { target: { value: 'John Doe' } });
    
        // Simulate form submission by clicking the submit button
        fireEvent.click(screen.getByTestId('add-card-button'));
    
        // Assert that the mock function is called with the correct data
        expect(mockAddNewCard).toHaveBeenCalledWith({
          name: 'Test Card',
          status: 'Published',
          content: 'This is a test card content.',
          category: 'Technology',
          author: 'John Doe',
        });
      });
});
