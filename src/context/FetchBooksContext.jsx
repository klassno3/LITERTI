import { useState, useEffect, createContext } from "react";
export const FetchBooksContext = createContext();
const BooksProvider = ( { children } ) => {
  const [ books, setBooks ] = useState( {});

  const fetchBooks = async ( searchTerm ) => {
    try {
      const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${ searchTerm }&key=AIzaSyB9EREbXC8-zdMKfImmX2VRP4NM3sKDBrk`
      );
      const data = await response.json();
      setBooks( data );
    } catch ( error ) {
      console.error( 'Error fetching books:', error );
    }
    
  };

  useEffect( () => {
    fetchBooks( "thriller" );
  }, [] );

  return (
    <FetchBooksContext.Provider value={ { fetchBooks, books } } >{ children }</FetchBooksContext.Provider>
  );
};
export default BooksProvider;
