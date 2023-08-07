import { Card, Status, Category, Author } from './types';

// Predefined cards data for testing purposes 
const presetData: Card[] = [
  {
    name: 'Sample Card 1',
    status: Status.Published,
    content: 'Lorem ipsum doloret sin amet, consectetur adipiscing elit. Aliquam at quam nec.',
    category: Category.Physics,
    author: { id: '1', name: 'Tereza Konecna' },

  },
  {
    name: 'Sample Card 2',
    status: Status.Draft,
    content: 'Morbi faucibus volutpat lobortis. Vivamus porta erat justo, consectetur hendrerit enim euismod vulputate.',
    category: Category.Technology,
    author: { id: '2', name: 'Jane Smith' },
  },
  {
    name: 'Sample Card 3',
    status: Status.Published,
    content: 'Donec sodales nisl eu ligula feugiat placerat. Donec nec quam ac nibh commodo sempr us sit amet lacus.',
    category: Category.Sociology,
    author: { id: '3', name: 'Jakob Antalik' },
  },
];


  
export default presetData;
