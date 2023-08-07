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
  
  export interface Card {
    name: string;
    status: Status;
    content: string;
    category: Category;
    author: string;
  }
  
  
