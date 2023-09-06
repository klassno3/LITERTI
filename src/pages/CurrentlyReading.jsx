import { useContext } from 'react';
import { MyBooksContext } from '../context/MyBooksContext';
import MyBook from '../component/MyBook';

const CurrentlyReading = () => {
  const {currentlyReading,clearCurrentlyReading } = useContext(MyBooksContext);
  
  const renderBook = currentlyReading.map( ( book ) => (
   

        <MyBook key={ book.id} book={book} name="reading"/>
   
  ) );
  return (
    <div className="max-w-[1440px] font-poppins mt-12   mx-auto">
      <div className="w-10/12 mx-auto">
        <div className="flex justify-between items-center">

          <h1 className="text-xl">My Books: Currently Reading</h1>
           <button className="bg-primary-100 flex justify-center transition-all rounded-sm duration-300 hover:bg-primary-200 text-secondary-100 px-4 py-2" onClick={ () => clearCurrentlyReading() }>Clear All</button>

        </div>
        <div className="grid grid-cols-3 justify-start">

        {renderBook}
        </div>
      </div>
    </div>
  );
};

export default CurrentlyReading;


