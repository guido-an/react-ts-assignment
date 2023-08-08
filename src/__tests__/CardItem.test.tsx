import { render, screen, fireEvent } from '@testing-library/react';
import CardItem from '../components/CardItem';
import { Card, Status, Category, Author } from '../types';

describe('Test CardItem component', () => {
  test('should render card details in view mode', () => {
    // Create a mock card and logged-in user data
    const card: Card = {
      name: 'Test Card',
      status: Status.Published,
      content: 'This is a test card content.',
      category: Category.Technology,
      author: { name: 'John Doe', id: '123' },
    };
    const loggedInUser: Author = { name: 'Jane Smith', id: '456' };

    // Render the CardItem component
    render(<CardItem card={card} loggedInUser={loggedInUser} />);

    // Assert that the card details are rendered in view mode
    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('Status: Published')).toBeInTheDocument();
    expect(screen.getByText('Content: This is a test card content.')).toBeInTheDocument();
    expect(screen.getByText('Category: Technology')).toBeInTheDocument();
    expect(screen.getByText('Author: John Doe')).toBeInTheDocument();

    // Assert that the "Edit" button is not rendered for non-author users
    expect(screen.queryByTestId('edit')).not.toBeInTheDocument();
  });

  test('should display "Edit" button to the author and entering edit mode when clicking on it', () => {
    // Create a mock card and logged-in user data
    const card: Card = {
      name: 'Test Card',
      status: Status.Published,
      content: 'This is a test card content.',
      category: Category.Technology,
      author: { name: 'John Doe', id: '123' },
    };
    const loggedInUser: Author = { name: 'John Doe', id: '123' };

    render(<CardItem card={card} loggedInUser={loggedInUser} />);

    // Assert that the "Edit" button is rendered for the author
    const editButton = screen.getByText('Edit');
    expect(editButton).toBeInTheDocument();
      
    // Click the "Edit" button
    fireEvent.click(editButton);

    // Assert that labels and input/select elements for editing card details are visible
    // Check each editable key (name, status, content, category) with the corresponding label
    const editableKeys = ['name', 'status', 'content', 'category'];
    editableKeys.forEach((key) => {
       const label = screen.getByLabelText(`${key.charAt(0).toUpperCase() + key.slice(1)}:`);
       expect(label).toBeInTheDocument();
    });
  });

  test('should update card details when clicking "Save"', () => {
    // Create a mock card and logged-in user data
    const card: Card = {
      name: 'Test Card',
      status: Status.Published,
      content: 'This is a test card content.',
      category: Category.Technology,
      author: { name: 'John Doe', id: '123' },
    };
    const loggedInUser: Author = { name: 'John Doe', id: '123' };

    render(<CardItem card={card} loggedInUser={loggedInUser} />);

    // Click the "Edit" button
    fireEvent.click(screen.getByText('Edit'));

    // Modify the card details in edit mode
    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'Updated Card' } });
    fireEvent.change(screen.getByLabelText('Content:'), { target: { value: 'Updated content' } });
    fireEvent.change(screen.getByLabelText('Status:'), { target: { value: 'Draft' } });
    fireEvent.change(screen.getByLabelText('Category:'), { target: { value: 'Physics' } });

    // Click the "Save" button
    fireEvent.click(screen.getByText('Save'));

    // Assert that the updated card details are displayed
    expect(screen.getByText('Updated Card')).toBeInTheDocument();
    expect(screen.getByText('Status: Draft')).toBeInTheDocument();
    expect(screen.getByText('Content: Updated content')).toBeInTheDocument();
    expect(screen.getByText('Category: Physics')).toBeInTheDocument();
  });

});
