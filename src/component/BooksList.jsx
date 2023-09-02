import {Link} from "react-router-dom"
import { FaStar } from 'react-icons/fa';
import Button from './Button';

const BooksList = ({book}) => {
  const {id,publishedDate, title, author, thumbnail, pageCount,averageRating } = book;

   const result = [];
  for ( let i = 0; i < averageRating; i++) {
      result.push(<div className='text-primary-200'><FaStar size={20}/></div>);
    }
  return (
    
    
      <div className="max-w-[1440px mx-auto] ">
    <Link key={id} to={ `book/${ id }` } >
    <div className='cursor-pointer relative group flex flex-col'>
       
            
            

            
            
          <img className=' h-[200px] rounded-b-none rounded-t-md ' src={ thumbnail } alt="product" />
          <div className="hidden absolute bottom-0 w-full p-4  flex-col items-center gap-2 bg-tertiary-100/90 group-hover:flex transition-all duration-1000">

        <h3 className="font-poppins text-center">{ title.slice(0,20)}</h3>
        <h3 className="font-poppins text-center">By { author.slice(0,20)}</h3>
        <h3 className="font-poppins text-center flex gap-2"> {result} </h3>
        <h3 className="font-poppins text-center"> { publishedDate}</h3>
        <h3 className="font-poppins text-center"> { pageCount} Pages</h3>
          </div>
        </div>
      </Link> 
      
        <Button/>
      </div>
  )
}

export default BooksList
