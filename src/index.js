import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BooksProvider from './context/FetchBooksContext';
import MyBooksProvider from './context/MyBooksContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BooksProvider>
    <MyBooksProvider>
      
  <React.StrictMode>
    <App />
  </React.StrictMode>
</MyBooksProvider>
  </BooksProvider>
);
