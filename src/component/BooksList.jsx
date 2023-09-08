import { Link } from "react-router-dom"
import { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import ButtonDropDown from "./ButtonDropDown"
const BooksList = ({book}) => {
  const [ selection, setSelection ] = useState( null );
  const { id, publishedDate, title, author, thumbnail, pageCount, averageRating } = book;

  const result = [];
  for ( let i = 0; i < averageRating; i++ ) {
    result.push( <div className='text-primary-200'><FaStar size={ 20 } /></div> );
  }

  const handleSelect = ( option ) => {
    setSelection( option.value )
  }

  const options = [
    
    { label: "Want to Read ", value: "Want to Read " },
    { label: "Reading", value: "Reading" },
    { label: "Did not Finish", value: "Did not Finish" },
    { label: "Read", value: "Read" },

  ];

  return (
    
    <div key={ id } className=" max-w-[1440px mx-auto] ">
      <Link to={ `book/${ id }` } >
        <div className='overflow-hidden cursor-pointer relative group flex flex-col'>

          <img className=' h-[200px] rounded-b-none rounded-t-lg ' src={ thumbnail } alt="book" />
          <div className="absolute opacity-0 bottom-0 w-full translate-y-32 p-4  flex-col items-center gap-1 bg-tertiary-100/90 group-hover:opacity-100  group-hover:translate-y-0 group-hover:flex transition-all duration-300">
            <h3 className="font-poppins text-center">{ title.slice( 0, 20 ) }</h3>
            <h3 className="font-poppins text-center">By { author.slice( 0, 20 ) }</h3>
            <h3 className="font-poppins text-center flex gap-2"> { result } </h3>
            <h3 className="font-poppins text-center"> { publishedDate }</h3>
            <h3 className="font-poppins text-center"> { pageCount } Pages</h3>
          </div>

        </div>
      </Link> 
      <ButtonDropDown book={ book } id={ id } options={ options } selection={ selection } onSelect={ handleSelect } />
      
    </div>
    
  )
}

export default BooksList
