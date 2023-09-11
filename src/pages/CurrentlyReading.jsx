import { useContext } from 'react';
import MyBook from '../component/MyBook';
import { MyBooksContext } from '../context/MyBooksContext';

const CurrentlyReading = () => {
  const { clearCurrentlyReading } = useContext( MyBooksContext );
 
  let renderedBook, count = 0;
  if ( localStorage.getItem( 'currentlyReadingBooks' ) ) {
    const readBooks = JSON.parse( localStorage.getItem( 'currentlyReadingBooks' ) );
    renderedBook = readBooks.map( ( book ) => (
      <MyBook name="reading" key={ book.id } book={ book } />
    ) );
  } 
  if ( localStorage.getItem( 'NumberOfReadingBooks' ) ) {
    count = localStorage.getItem( 'NumberOfReadingBooks' )
  }

  
  
  return (
    <div className="max-w-[1440px] font-poppins mt-20   mx-auto">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="md:text-3xl text-xl font-dm  tracking-wide">My Books: Currently Reading ({count})</h1>
           <button  onClick={ () => clearCurrentlyReading() } className="bg-primary-100 flex justify-center transition-all rounded-sm duration-300 hover:bg-primary-200 text-secondary-100 px-2 py-1 md:px-4 md:py-2 text-sm md:text-base">Clear All</button>
        </div>
        <div className="grid   grid-cols-1 lg:grid-cols-2  justify-start">
        {  renderedBook}
        </div>
      </div>
    </div>
  );
};

export default CurrentlyReading;


