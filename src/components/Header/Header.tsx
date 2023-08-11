import React, { useState } from 'react';
import './Header.scss'; 
import { Author, Card } from '../../types';
import AddCardForm from '../AddCardForm/AddCardForm';
import Modal from '../../shared/Modal/Modal';

interface HeaderProps {
    addNewCard: (card: Card) => void,
    loggedInUser: Author
}

const Header: React.FC<HeaderProps> = ({ addNewCard, loggedInUser }) => {
 const [isModalOpen, setIsModalOpen] = useState(false);

 const handleModal= () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <>
    <header className="header">
      <div className="header-items">
          <p className="header-item">Activity</p>
          <p className="header-item">Users</p>
          <p className="header-item">Groups</p>
        <div className="header-add" onClick={handleModal}>
          <div className="header-add-icon">+</div>
        </div>
      </div>
    </header>
    {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <AddCardForm addNewCard={addNewCard} loggedInUser={loggedInUser} />
        </Modal>
      )}
    </>
  );
};

export default Header;
