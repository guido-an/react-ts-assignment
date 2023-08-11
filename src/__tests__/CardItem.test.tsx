import { render, screen, fireEvent } from '@testing-library/react';
import CardItem from '../components/CardItem/CardItem';
import { Card, Status, Category, Author } from '../types';

const renderCard = (loggedInUser: Author) => {
  const card: Card = {
    id: '123',
    name: 'Test Card',
    status: Status.Published,
    content: 'This is a test card content.',
    category: Category.Technology,
    author: { name: 'John Doe', id: '123' },
  };
  const mockUpdateCard = jest.fn();
  const mockDeleteCard = jest.fn();

  return render(<CardItem 
                   card={card} 
                   loggedInUser={loggedInUser} 
                   updateCard={mockUpdateCard} 
                   deleteCard={mockDeleteCard}
                />);
}

describe('Test CardItem component', () => {
  test('should render card details in view mode', () => {
    const loggedInUser: Author = { name: 'Jane Smith', id: '456' };
    renderCard(loggedInUser)

    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('Status: Published')).toBeInTheDocument();
    expect(screen.getByText('Content: This is a test card content.')).toBeInTheDocument();
    expect(screen.getByText('Category: Technology')).toBeInTheDocument();
    expect(screen.getByText('Author: John Doe')).toBeInTheDocument();

    expect(screen.queryByTestId('edit')).not.toBeInTheDocument();
  });

  test('should display "Edit" button to the author and entering edit mode when clicking on it', () => {
    const loggedInUser: Author = { name: 'John Doe', id: '123' };
    renderCard(loggedInUser)

    const editButton = screen.getByText('Edit');
    expect(editButton).toBeInTheDocument();
      
    fireEvent.click(editButton);

    // Assert that labels and input/select elements for editing card details are visible
    // Check each editable key (name, status, content, category) with the corresponding label
    const editableKeys = ['name', 'status', 'content', 'category'];
    editableKeys.forEach((key) => {
       const label = screen.getByLabelText(`${key.charAt(0).toUpperCase() + key.slice(1)}:`);
       expect(label).toBeInTheDocument();
    });
  });

});
