import React from 'react'
import { FaStar } from 'react-icons/fa';
import Button from './Button';
const BooksList = ({book}) => {
  const { publishedDate, title, author, thumbnail, pageCount,averageRating } = book;

   const result = [];
  for ( let i = 0; i < averageRating; i++) {
      result.push(<div className='text-primary-200'><FaStar size={20}/></div>);
    }
  return (
    <div>
      <div className="">
    
    <div className='h-[310px]  cursor-pointer relative flex flex-col group'>
   
              
            
            
          <img className='  rounded-b-none rounded-t-lg h-full' src={ thumbnail } alt="product" />
          <div className="hidden absolute bottom-0 w-full p-4  flex-col items-center gap-2 bg-tertiary-100/90 group-hover:flex transition-all duration-1000">

        <h3 className="font-poppins text-center">{ title}</h3>
        <h3 className="font-poppins text-center">By { author}</h3>
        <h3 className="font-poppins text-center flex gap-2"> {result} </h3>
        <h3 className="font-poppins text-center"> { publishedDate}</h3>
        <h3 className="font-poppins text-center"> { pageCount} Pages</h3>
          </div>
        </div>
        <Button/>
      </div>
</div>   
  )
}

export default BooksList
