import { useContext,useState } from 'react'
import { BsTrash3Fill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { MyBooksContext } from '../context/MyBooksContext';
import Range from './Range';
const MyBook = ( { book ,name,rating,tracking} ) => {
  const { id, pageCount, title, author, thumbnail, averageRating } = book;
  const { removeBook } = useContext( MyBooksContext )
  const [ rate, setRate ] = useState( "" );

  

  
  
  const result = [];
  for ( let i = 0; i < averageRating; i++ ) {
    result.push( <div className='text-primary-200'><AiFillStar  size={ 25 } /></div> );
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
    // const updatedBook = { ...book, Personalrating: parseFloat( rate ) };
  };

  const handleChange = (event) => {
    setRate(event.target.value)
  }

  

  return (
    <div className=" ">
      <div className="flex justify-start gap-7 mt-10">
        <div className="flex flex-col gap-3 w-1/2">
          <div>
          <img className="w-full rounded-sm " src={ thumbnail } alt="" />
          </div>
            <button onClick={ () => removeBook( id, name ) } className=" bg-primary-100 justify-center flex items-center transition-all rounded-sm duration-300 hover:bg-primary-200 text-secondary-200 py-3" ><BsTrash3Fill /></button>
        </div>
        <div className="w-full text-secondary-100">
          <div className="flex flex-col items-start justify-end gap-2">
            <h1 className="text-xl  ">{ title }</h1>
            <p className="text-base font-thin">{ author }</p>
            <div className="flex gap-8 items-center">
              <p className="flex gap-1 ">{ result }</p>
              <p className="text-secondary-100/90">{ averageRating }</p>
            </div>
            <p className="text-secondary-100/90">{ pageCount ? pageCount + " Pages" : null }</p>
            { name === "reading" ? <Range id={ id } pageCount={pageCount} /> : null }

            <div>
              { rating === true ? <form onSubmit={ handleSubmit } className="flex flex-col md:flex-row gap-4">
                <label htmlFor="rate">Your Rating: </label>
                <input value={ rate } className="rounded-sm bg-tertiary-300/50 py-1 px-2 text-secondary-200 focus:outline-none focus:ring-2 focus:ring-primary-300 " onChange={ handleChange } type="number" id="rate" name="rating" min="0" max="5" step="0.25" />
              </form> : null }
            </div>
          </div>
        </div>
      </div>




    </div>
    
  )
}

export default MyBook
