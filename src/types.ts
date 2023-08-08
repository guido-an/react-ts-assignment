export enum Status {
    Published = 'Published',
    Draft = 'Draft',
  }
  
  export enum Category {
    Physics = 'Physics',
    Technology = 'Technology',
    Chemistry = 'Chemistry',
    Sociology = 'Sociology',
    Other = 'Other'
  }

  export interface Author {
    id: string;
    name: string;
  }
  
  export interface Card {
    id: string; 
    name: string;
    status: Status;
    content: string;
    category: Category;
    author: Author;
  }
  
  
