import { useContext } from 'react';
import { MyBooksContext } from '../context/MyBooksContext';
import MyBook from '../component/MyBook';




const Read = () => {
  
    const {read,clearRead} = useContext(MyBooksContext);
    
    const renderBook = read.map( ( book ) => (
          <MyBook key={ book.id} book={book}  name="read" rating={true} />
    ) );
  return (
     <div className="max-w-[1440px] font-poppins mt-12   mx-auto">
      <div className="w-10/12 mx-auto">
    <div className="flex justify-between items-center">

          <h1 className="text-xl">My Books: Read</h1>
           <button className="bg-primary-100 flex justify-center transition-all rounded-sm duration-300 hover:bg-primary-200 text-secondary-100 px-4 py-2" onClick={ () => clearRead() }>Clear All</button>

        </div>
       <div className="grid grid-cols-3 justify-start">

        {renderBook}
        </div>
    </div>
      </div>
  )
}

export default Read
////AIzaSyB9EREbXC8-zdMKfImmX2VRP4NM3sKDBrk