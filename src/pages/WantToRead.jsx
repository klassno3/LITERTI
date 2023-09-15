import { useContext } from 'react';
import { MyBooksContext } from '../context/MyBooksContext';
import MyBook from '../component/MyBook';
import Button from '../component/Button';
const WantToRead = () => {
  const {  clearWantToRead } = useContext( MyBooksContext );
 
  let renderedBook, count = 0;
  if ( localStorage.getItem( 'wantToReadBooks' ) ) {
    const readBooks = JSON.parse( localStorage.getItem( 'wantToReadBooks' ) );
    renderedBook = readBooks.map( ( book ) => (
      <MyBook key={ book.id } book={ book } name="want to read" />
    ) );
  } 
  if ( localStorage.getItem( 'NumberOfWantToReadBooks' ) ) {
    count = localStorage.getItem( 'NumberOfWantToReadBooks' )
  }
  
  const handleClick = () => {
    clearWantToRead()
  }

  return (

    <div className="max-w-[1440px] font-poppins mt-20 mx-auto">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="md:text-3xl text-xl font-dm  tracking-wide">My Books: Want To Read ({count})</h1>
          <Button onClick={ handleClick }>Clear All</Button>
        </div>
        <div className="grid   grid-cols-1 lg:grid-cols-2  justify-start">
          { renderedBook }
        </div>
      </div>
    </div>

  );
};

export default WantToRead;


