import React, { useContext,useState } from 'react'
import { BsTrash3Fill } from 'react-icons/bs';
import { AiFillStar} from 'react-icons/ai';
import { MyBooksContext } from '../context/MyBooksContext';
import Top from "../component/Top"
const MyBook = ( { book, rating ,name} ) => {
  const { id, pageCount, title, author, thumbnail, averageRating } = book;
  const { removeBook } = useContext( MyBooksContext )
  const [ rate, setRate ] = useState( "" );
  const [ tracker, setTracker] = useState( false );

  
  const handleCurrently = () => {
    if ( name === "reading" ) {
     setTracker(!tracker)
      
    }
    
  }
  const result = [];
  for ( let i = 0; i < averageRating; i++ ) {
    result.push( <div className='text-primary-200'><AiFillStar  size={ 25 } /></div> );
  } 


  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedBook = { ...book, Personalrating: parseFloat( rate ) };
  };


  const handleChange = (event) => {
    setRate(event.target.value)
  }



  return (
    <div className=" ">
      
      { tracker ? <Top book={ book } /> : ""}     
      <div className="flex justify-start gap-5 mt-10">
          <div className="flex flex-col gap-2">
        <img onClick={ handleCurrently } className={`${name==="reading"? "cursor-pointer": ""}`} src={ thumbnail } alt="" />
          <button className="bg-primary-100 flex justify-center transition-all rounded-sm duration-300 hover:bg-primary-200 text-secondary-100 px-4 py-2" onClick={ () => removeBook( id, name ) }><BsTrash3Fill/></button>
          

          </div>
          <div className="w-full text-secondary-100">
           
              <div className="flex flex-col gap-2">
                <h1 className="text-lg  ">{ title }</h1>
                <p className="text-base font-thin">{ author }</p>
     <div className="flex gap-12 items-center">
                  <p className="flex gap-1 ">{ result }</p>
            <p className="text-secondary-100/90">{ averageRating }</p>
          </div>
              
            <p className="">{ pageCount ? pageCount + " Pages" : "" }</p>
            <div className="">
              { rating ?
                
          
                <form onSubmit={ handleSubmit } className="flex gap-4">
                  <label for="rate">Your Rating: </label>
                  <input className="rounded-sm  px-2 text-tertiary-200 focus:outline-none focus:ring-2 focus:ring-primary-300 " onChange={ handleChange } type="number" id="rate" name="rating" min="0" max="5" step="0.25" />
                  

                </form>
                
               
                : "" }
            
            
            
            </div>
            

            
          
           
            </div>
        
        </div>
      </div>
  

    
  </div>
  )
}

export default MyBook
