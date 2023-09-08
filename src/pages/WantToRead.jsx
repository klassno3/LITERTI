import { useContext } from 'react';
import { MyBooksContext } from '../context/MyBooksContext';
import MyBook from '../component/MyBook';

const WantToRead = () => {
  const { wantToRead, clearWantToRead } = useContext( MyBooksContext );
  
  
  const renderBook = wantToRead.map( ( book ) => (
    <MyBook key={ book.id } book={ book } name="want to read" />

  ) );

  return (

    <div className="max-w-[1440px] font-poppins mt-20 mx-auto">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="md:text-3xl text-xl font-dm  tracking-wide">My Books: Want To Read</h1>
          <button onClick={ () => clearWantToRead() } className="bg-primary-100 flex justify-center transition-all rounded-sm duration-300 hover:bg-primary-200 text-secondary-100 px-2 py-1 md:px-4 md:py-2 text-sm md:text-base">Clear All</button>
        </div>
        <div className="grid   grid-cols-1 lg:grid-cols-2  justify-start">
          { renderBook }
        </div>
      </div>
    </div>

  );
};

export default WantToRead;


