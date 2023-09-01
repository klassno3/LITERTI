import { useState, useEffect, createContext } from "react";

export const FetchBooksContext = createContext();
const BooksProvider = ( { children } ) => {
  // const [ search, setSearch ] = useState( "react" )
  const [ books, setBooks ] = useState( {});
  
  ;
  //////////////////////////////////////////////


const fetchBooks = async (searchTerm) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=`
    );
    const data = await response.json();
    setBooks(data);
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

useEffect(() => {
  fetchBooks();
}, []);



  return (
    <FetchBooksContext.Provider value={ { fetchBooks, books } } >{ children }</FetchBooksContext.Provider>
  );

};
export default BooksProvider;