import { useState, createContext, } from "react";

export const MyBooksContext = createContext();
const MyBooksProvider = ({children}) => {
  const [ read, setRead ] = useState( [] );
  const [ wantToRead, setWantToRead ] = useState( [] );
  const [ didNotFinish, setDidNotFinish ] = useState( [] );
  const [ currentlyReading, setCurrentlyReading ] = useState( [] )
  
  

   
  const addToWantToRead = ( book, id ) => {
 
      // Check if the book already exists in the wantToRead array
    const isBookInList = wantToRead.some((item) => item.id === id);
    const isBookInOtherList = currentlyReading.some((item) => item.id === id) ||  read.some((item) => item.id === id) ||  didNotFinish.some((item) => item.id === id) ;
    
    if ( isBookInOtherList ) {
      alert( 'This Book is  already in the other list!!! ' );
    }
    if (!isBookInList && !isBookInOtherList) {
      setWantToRead( ( prevBooks ) => [ ...prevBooks, { ...book, id } ] );
    } else {
        console.log('Book already exists in the list!');
    }

  };

  const addToCurrentlyReading = ( book, id ) => {

    // Check if the book already exists in the wantToRead array
    const isBookInList = currentlyReading.some( ( item ) => item.id === id );
    const isBookInOtherList = wantToRead.some( ( item ) => item.id === id ) || read.some( ( item ) => item.id === id ) || didNotFinish.some( ( item ) => item.id === id );
    
   if ( isBookInOtherList ) {
      alert( 'This Book is  already in the other list!!! ' );
      
    }
    if (!isBookInList && !isBookInOtherList) {
      setCurrentlyReading( ( prevBooks ) => [ ...prevBooks, { ...book, id } ] );
    } else {
        console.log('Book already exists in the list!');
    }

  };

  const addToRead = ( book, id ) => {
 
      // Check if the book already exists in the wantToRead array
    const isBookInList = read.some( ( item ) => item.id === id );
    const isBookInOtherList = wantToRead.some( ( item ) => item.id === id ) || currentlyReading.some( ( item ) => item.id === id ) || didNotFinish.some( ( item ) => item.id === id );
    
   if ( isBookInOtherList ) {
      alert( 'This Book is  already in the other list!!! ' );
      
    }
    if ( !isBookInList && !isBookInOtherList ) {
      setRead( ( prevBooks ) => [ ...prevBooks, { ...book, id } ] );
    } else {
        console.log('Book already exists in the list!');
    }

  };
  const addToDidNotFinish = ( book, id ) => {
 
      // Check if the book already exists in the wantToRead array
    const isBookInList = didNotFinish.some( ( item ) => item.id === id );
    const isBookInOtherList = wantToRead.some( ( item ) => item.id === id ) || currentlyReading.some( ( item ) => item.id === id ) || read.some( ( item ) => item.id === id );
    
   if ( isBookInOtherList ) {
      alert( 'This Book is  already in the other list!!! ' );
      
    }
    
    if (!isBookInList && !isBookInOtherList) {
      setDidNotFinish( ( prevBooks ) => [ ...prevBooks, { ...book, id } ] );
    } else {
        console.log('Book already exists in the list!');
    }

  };

  const removeBook = ( id, name ) => {
      
   
    if ( name === "want to read" ) {
        
      const newBook = wantToRead.filter( ( item ) => {
          
        return item.id !== id;
        
      } );
      

      setWantToRead( newBook );
      

    } else if ( name === "read" ) {
      
      const newBook = read.filter( ( item ) => {
          
        return item.id !== id;
        
      } );
      
        
      setRead( newBook );
      

    } else if ( name === "reading" ) {
      
      const newBook = currentlyReading.filter( ( item ) => {
          
        return item.id !== id;
        
      } );
      
        
      setCurrentlyReading( newBook );
      

    } else if ( name === "dnf" ) {
      
      const newBook = didNotFinish.filter( ( item ) => {
          
        return item.id !== id;
        
      
      } );
      
        
      setDidNotFinish( newBook );
      

    }
    
      
  }
  
  const clearWantToRead = () => {
    
      
    setWantToRead( [] );

  }

  const clearCurrentlyReading = () => {
      

    setCurrentlyReading( [] );
    
  } 
  
    
  const clearRead = () => {
      
    
    setRead( [] );
    
  }
  
    
  const clearDidNotFinish = () => {
      
    
    setDidNotFinish( [] );
    
  }
  
  return (

    <MyBooksContext.Provider value={ {
      addToCurrentlyReading,
      addToDidNotFinish,
      addToRead,
      addToWantToRead,
      removeBook,
      clearCurrentlyReading,
      clearDidNotFinish,
      clearWantToRead,
      clearRead, wantToRead,
      currentlyReading,
      didNotFinish,
      read
    } }>
      { children }
    </MyBooksContext.Provider>
  )

}

export default MyBooksProvider;