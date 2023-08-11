import React from 'react';
import './Layout.scss'; 

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <div className="sidebar">
        <p><strong>Sertis Frontend Test:</strong></p>
        <p>The submission should be able to perform the following functions:</p>
        <p>1. Add new cards by input name, status, content, category, and author.</p>
        <p>2. Edit a card's name, status, content, and category. Only the author of the card can perform this function. Add ‘edit’ button to the left of status circle (top-right corner) for this function.</p>
        <p>3. Delete a card. Only the author of the card can perform this function.</p>
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
