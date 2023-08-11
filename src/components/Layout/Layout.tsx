import React from 'react';
import './Layout.scss'; 
import Header from '../Header/Header';
import { Author, Card } from '../../types';

interface LayoutProps {
  children: React.ReactNode,
  addNewCard: (card: Card) => void,
  loggedInUser: Author,
}

const Layout: React.FC<LayoutProps> = ({ children, addNewCard, loggedInUser }) => {
  return (
    <div className="layout">
      <div className="sidebar" />
      <div>
        <Header addNewCard={addNewCard} loggedInUser={loggedInUser} />
        <div className="main-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
