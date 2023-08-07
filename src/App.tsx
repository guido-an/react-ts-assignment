import React from 'react';
import AddCardForm from './components/AddCardForm';
import { Card } from './components/types';

const App: React.FC = () => {

  function addNewCard(card: Card){
    console.log(card)
  }
  return (
    <div>
      <h1>Mini Blog App</h1>
      <AddCardForm addNewCard={addNewCard}/>
    </div>
  );
};

export default App;