import { useState, createContext } from "react";
export const MyBooksContext = createContext();
const MyBooksProvider = ({children}) => {
  const [ read, setRead ] = useState( [] );
  const [ wantToRead, setWantToRead ] = useState( [] );
  const [ didNotFinish, setDidNotFinish ] = useState( [] );
  const [ currentlyReading, setCurrentlyReading ] = useState( [] )
  
  const addToWantToRead = ( book, id ) => {
  const isBookInList = wantToRead.some((item) => item.id === id);
    const isInOtherList = [ currentlyReading, read, didNotFinish ].some( list => list.some( item => item.id === id ) )
    

  if (isInOtherList) {
    alert('This book is already in another list!');
  }
  if (!isBookInList && !isInOtherList) {
    const updatedRead = [...wantToRead, { ...book, id }];
    setWantToRead(updatedRead);
    const bookCount = updatedRead.length ;
    

    // Persist updatedRead and bookWantToReadAmount to localStorage
    localStorage.setItem('wantToReadBooks', JSON.stringify(updatedRead));
    localStorage.setItem('NumberOfWantToReadBooks',bookCount);
  }
};
 

  

  const addToCurrentlyReading = ( book, id ) => {

    // Check if the book already exists in the wantToRead array
    const isBookInList = currentlyReading.some( ( item ) => item.id === id );

    const isInOtherList = [ wantToRead, read, didNotFinish ].some( list => list.some( item => item.id === id ) )
    
    
   if ( isBookInList ) {
      alert( 'This Book is  already in the other list!!! ' );
      
    }
    if (!isBookInList && !isInOtherList) {
       const updatedRead = [...currentlyReading, { ...book, id }];
      setCurrentlyReading(updatedRead );
      
      const bookCount = updatedRead.length ;
      // Persist the updatedRead array in local storage
      localStorage.setItem('currentlyReadingBooks', JSON.stringify(updatedRead));
      localStorage.setItem( "NumberOfReadingBooks", bookCount );
    }
  } 
  


  const addToRead = ( book, id ) => {
 
    // Check if the book already exists in the wantToRead array
    const isBookInList = read.some( ( item ) => item.id === id );
     const isInOtherList = [wantToRead, currentlyReading, didNotFinish].some(
    (list) => list.some((item) => item.id === id)
    );
    

    if ( isInOtherList ) {
      alert( 'This book is already in another list!' );
    }
  
    if ( !isBookInList && !isInOtherList ) {
      const updatedRead = [...read, { ...book, id }];
    setRead(updatedRead);
    const bookCount = updatedRead.length ;
 
      // Persist the updatedRead array in local storage
      localStorage.setItem( 'readBooks', JSON.stringify( updatedRead ) );
      localStorage.setItem( "NumberOfReadBooks", bookCount );
    }

  };
  const addToDidNotFinish = ( book, id ) => {
 
      // Check if the book already exists in the wantToRead array
    const isBookInList = didNotFinish.some( ( item ) => item.id === id );
    const isInOtherList = [ wantToRead, currentlyReading, read ].some(  list  => 
      list.some( ( item ) => item.id === id ))
   if ( isBookInList) {
      alert( 'This Book is  already in the other list!!! ' );
      
    }
    
    if (!isBookInList && !isInOtherList) {
     const updatedRead = [...didNotFinish, { ...book, id }];
    setDidNotFinish(updatedRead);
    const bookCount = updatedRead.length ;
    
    // Persist the updatedRead array in local storage
    localStorage.setItem('didNotFinishBooks', JSON.stringify(updatedRead));
    localStorage.setItem("NumberOfDnfBooks",bookCount)
    }

  };

  const removeBook = ( id, name ) => {
    if ( name === "want to read" ) {
      const storedBooks = JSON.parse( localStorage.getItem( 'wantToReadBooks' ) ) 
      let count = JSON.parse( localStorage.getItem( 'NumberOfWantToReadBooks' ) ) 
      const newBook = storedBooks.filter( ( item ) => {
        return item.id !== id;
        
      } );
      

      count = newBook.length;
      setWantToRead( newBook );
      localStorage.setItem( 'wantToReadBooks', JSON.stringify( newBook ) );
      localStorage.setItem( 'NumberOfWantToReadBooks', count );

    } else if ( name === "read" ) {
      const storedBooks = JSON.parse( localStorage.getItem( 'readBooks' ) )
      let count = JSON.parse(localStorage.getItem('NumberReadBooks')) 
      const newBook = storedBooks.filter( ( item ) => {
          
        return item.id !== id;
        
      } );
       count = newBook.length;
      setRead( newBook );
      localStorage.setItem( 'readBooks', JSON.stringify( newBook ) );
      localStorage.setItem( 'NumberOfReadBooks', count );

    } else if ( name === "reading" ) {
      const storedBooks = JSON.parse( localStorage.getItem( 'currentlyReadingBooks' ) )
      let count = JSON.parse( localStorage.getItem( 'NumberReadingBooks' ) ) 
      const newBook = storedBooks.filter( ( item ) => {

        return item.id !== id;
      } );
      count = newBook.length;
      setCurrentlyReading( newBook );
      localStorage.setItem( 'currentlyReadingBooks', JSON.stringify( newBook ) );
      localStorage.setItem( 'NumberOfReadingBooks', count );

    } else if ( name === "dnf" ) {
      const storedBooks = JSON.parse( localStorage.getItem( 'didNotFinishBooks' ) )
      let count = JSON.parse( localStorage.getItem( 'NumberOfDnfBooks' ) ) 
      const newBook = storedBooks.filter( ( item ) => {
        return item.id !== id;
      } );
      count = newBook.length;
      setDidNotFinish( newBook );
      localStorage.setItem( 'didNotFinishBooks', JSON.stringify(newBook ) );
      localStorage.setItem( 'NumberOfDnfBooks', count );
    }
  }
  
  const clearWantToRead = () => {
    setWantToRead( [] );
    localStorage.setItem( 'wantToReadBooks', JSON.stringify( [] ) );
    localStorage.setItem( 'NumberOfWantToReadBooks', 0 );
    
  }

  const clearCurrentlyReading = () => {
    setCurrentlyReading( [] );
    localStorage.setItem( 'currentlyReadingBooks', JSON.stringify( [] ) );
    localStorage.setItem( 'NumberOfReadingBooks', 0 );
  } 
    
  const clearRead = () => {
    setRead( [] );
    console.log("lover")
    localStorage.setItem( 'readBooks', JSON.stringify( [] ) );
    localStorage.setItem( 'NumberOfReadBooks', 0 );
  }

  const clearDidNotFinish = () => {
    setDidNotFinish( [] );
    localStorage.setItem( 'didNotFinishBooks', JSON.stringify( [] ) );
    localStorage.setItem( 'NumberOfDnfBooks', 0 );
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
      clearRead,
      wantToRead,
      currentlyReading,
      didNotFinish,
      read,
      
     
    } }>
      { children }
    </MyBooksContext.Provider>
  )

}

export default MyBooksProvider;