import {useState} from 'react'
import { MdOutlineModeEditOutline } from "react-icons/md"
import ChallengeEdit from '../component/ChallengeEdit';
import Tracker from '../component/Tracker';
import ImagesList from '../component/ImagesList';
const ReadingChallenge = () => {
  
  const [ showEdit, setShowEdit ] = useState( false );
  const [ readingGoal, setReadingGoal ] = useState();  
  const goal = localStorage.getItem( 'readingGoal' );
  const count = localStorage.getItem( 'NumberOfReadBooks' )
 const booksFromRead= localStorage.getItem( 'readBooks' )
  
  let renderedBook, longest, shortest;
  if (booksFromRead ) {
      const books = booksFromRead
    const readBooks = JSON.parse( books )
     renderedBook = readBooks.map( ( book ) => (
      <ImagesList book={book}/>
      ) );
      
    // Find the book with the largest page count
    let largestPageCountBook = null;
    if ( readBooks.length > 0 ) {
      largestPageCountBook = readBooks.reduce( ( acc, curr ) => {
        return curr.pageCount > acc.pageCount ? curr : acc;
      } );
    }

    localStorage.setItem( "longestBook", JSON.stringify( largestPageCountBook ) );
    const longestBook = localStorage.getItem( 'longestBook' );
    longest = JSON.parse( longestBook );
       
    // Find the book with the smallest page count
    let smallestPageCountBook = null;
    if ( readBooks.length > 0 ) {
      smallestPageCountBook = readBooks.reduce( ( acc, curr ) => {
        return curr.pageCount < acc.pageCount ? curr : acc;
      } );
    }
       
    localStorage.setItem( "shortestBook", JSON.stringify( smallestPageCountBook ) );
    const shortestBook = localStorage.getItem( 'shortestBook' );
    shortest = JSON.parse( shortestBook );
    }
   

  
 

  const today = new Date();
  const year = today.getFullYear();

 
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('readingGoal', readingGoal);

    
  }
 
  const handleChange = ( event ) => {
    setReadingGoal(event.target.value)
  }

  const handleEditClick = () => {
    setShowEdit( true )
    
  }

  const handleGoalChange = (newGoal) => {
    setReadingGoal(newGoal)
  }
  let content = 
        !localStorage.getItem('readingGoal') ? (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col  gap-2">

        <label htmlFor="reading-goal" className="font-poppins text-lg ">Reading Goal : </label>
        <input
          onChange={handleChange}
          type="number"
          min={1}
          className="py-2 px-6 bg-tertiary-300/50 text-sm rounded-sm text-secondary-200 mx-auto flex justify-center font-poppins focus:outline-none focus:ring-2 focus:ring-primary-200"
          value={readingGoal}
          />
          </div>
        <button
          onClick={handleSubmit}
          className="bg-primary-100 font-poppins tracking-wide flex justify-center transition-all rounded-sm duration-300 hover:bg-primary-200 text-secondary-100 px-8 py-3 md:px-8 md:py-2 text-base md:text-xl"
        >
          Submit
        </button>
      </div>
    ) : (
     <Tracker/>
    )
  if ( showEdit ) {
    content = <ChallengeEdit readingGoal={ readingGoal } onGoalChange={ handleGoalChange } />
  }
  
  return (
   <div className="max-w-[1440px] mx-auto ">
      <div className='w-11/12 mx-auto mt-16' >
       <form  onSubmit={ handleSubmit } className="w-9/12 relative md:w-7/12 mx-auto px-8  py-12 rounded-md flex flex-col gap-6 md:gap-7 justify-center items-center bg-tertiary-200 ">
          {  goal ? 
            <MdOutlineModeEditOutline onClick={ handleEditClick } className='cursor-pointer absolute top-10 right-10 hover:text-primary-200 transition-all duration-300  text-2xl md:text-3xl ' />
            : null
          }
            <p className='flex mt-10 justify-center items-center text-center font-dm text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide focus:outline-none focus:ring-2 focus:ring-primary-300'>{ year } Reading Challenge </p>
          { !goal ?
          <p className="font-poppins text-secondary-200/40 text-sm tracking-wide font-thin md:text-base text-center">You can set reading challenges and track the books you read</p>
            : <p className="font-poppins text-secondary-200/40 text-sm tracking-wide font-thin md:text-base text-center">You have read {count?count:0} book out of { goal }</p>
          } 
          

          {content}
        
      </form>
        <p className="mx-auto flex justify-center text-3xl font-poppins my-20">List of books you have read</p>
        <div className="flex justify-between items-start">

      <div className="w-4/5 gap-y-14 grid grid-cols-4 justify-between items-start">

          { renderedBook }
          
          </div>
          
          <div className=" flex flex-col gap-16">
            { longest &&
            <div className="flex-col  gap-2 justify-start flex items-start">
          <img  className='w-full' src={longest.thumbnail} alt="" />
              <p className="text-xl font-poppins">Longest Book.</p>
              <p className="text-xl font-poppins">{ longest.pageCount } Pages</p>
              
            </div>
            }
            { shortest && 
            <div className="flex-col gap-2 flex items-start">
              <img className='w-full' src={ shortest.thumbnail } alt="" />
              <p className="text-xl font-poppins">Shortest Book</p>
              <p className="text-xl font-poppins">{ shortest.pageCount } Pages</p>
            </div>
            }
        </div>
        </div>
      </div>
   </div>
  )
}

export default ReadingChallenge
