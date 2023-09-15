import {useState} from 'react'
import { MdOutlineModeEditOutline } from "react-icons/md"
import ChallengeEdit from '../component/ChallengeEdit';
import Tracker from '../component/Tracker';
import ImagesList from '../component/ImagesList';
import Button from '../component/Button';
import {BsFillBarChartFill} from 'react-icons/bs'
import Status from '../component/Status';
const ReadingChallenge = () => {
  
  const [ showEdit, setShowEdit ] = useState(false  );
  const [ readingGoal, setReadingGoal ] = useState( 1 ); 
  const [showStatus,setShowStatus]=useState(false)
  const goal = localStorage.getItem( 'readingGoal' );
  const [submitted, setSubmitted] = useState(goal !== null);
  const count = localStorage.getItem( 'NumberOfReadBooks' )
  const booksFromRead= localStorage.getItem( 'readBooks' ) 
  const today = new Date();
  const year = today.getFullYear();
  const percentage = Math.ceil( ( count * 100 ) / goal );

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem( 'readingGoal', readingGoal );
    setSubmitted( true );

      
    
  }
 
  const handleStatus = () => {
    setShowStatus(true)
  }
  const handleChange = ( event ) => {
    setReadingGoal(event.target.value)
  }

  const handleEditClick = () => {
    console.log(showEdit)
    setShowEdit( true )
    console.log(showEdit)
  }

  const handleGoalChange = (newGoal) => {
    setReadingGoal(newGoal)
  }
  let renderedBook, longest, shortest,totalPageCount, leastReadBook,highestReadBook,bookCategories ;
  if (booksFromRead ) {
      const books = booksFromRead
    const readBooks = JSON.parse( books )

    // Calculate the sum of page counts
 totalPageCount = readBooks.reduce((sum, book) => sum + book.pageCount, 0);

     renderedBook = readBooks.map( ( book ) => (
       <ImagesList key={ book.id } book={book}/>
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
    
   
    if ( readBooks.length > 0 ) {
      leastReadBook = readBooks.reduce( ( acc, curr ) => {
        return curr.pageCount < acc.averageRating? curr : acc;
      } );
    }
   
    if ( readBooks.length > 0 ) {
      highestReadBook = readBooks.reduce( ( acc, curr ) => {
        return curr.pageCount > acc.averageRating? curr : acc;
      } );
    }
    // Get the category of each book
  bookCategories = readBooks.map((book) => book.category);

  }


  let content = 
        !submitted ? (
      <div className="flex flex-col items-center gap-6">
              <form onSubmit={ handleSubmit}>
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            
        <label htmlFor="reading-goal" className="font-poppins text-base md:text-lg ">Reading Goal : </label>
      <input
                onChange={ handleChange }
                id='reading-goal'
                type="number"
                value={readingGoal}
                min={ 1 }
                required
            
          className="py-2 px-6 w-1/2 md:w-full bg-tertiary-300/50 text-sm rounded-sm text-secondary-200 mx-auto flex justify-center font-poppins focus:outline-none focus:ring-2 focus:ring-primary-200"/>
          </div>
            <button
              
          onSubmit={ handleSubmit}
          className="bg-primary-100 font-poppins w-1/2 md:w-full tracking-wide flex justify-center transition-all rounded-sm duration-300 hover:bg-primary-200 text-secondary-100 px-8 py-3 md:px-8 md:py-2 text-base md:text-xl"
          >
          Submit
        </button>
          </div>
      </form> 
      </div>
    ) : (
      <div className="h-1/2">
          
          <Tracker  />
      </div>
    )
  if ( showEdit ) {
    content = <ChallengeEdit edit={ setShowEdit} onGoalChange={ handleGoalChange } />
  }
  
  return (
   <div className="max-w-[1440px] mx-auto ">
      <div className='w-11/12 mx-auto mt-16' >
        <div className="flex flex-col gap-6 md:gap-7 justify-start items-center bg-tertiary-200 w-11/12 relative md:w-7/12 mx-auto px-4 md:px-8  py-12 rounded-md ">

       <div className='flex flex-col justify-center items-center gap-3'>
          {  goal && !showStatus ? 
            <MdOutlineModeEditOutline onClick={ handleEditClick } className='cursor-pointer absolute top-10 right-10 hover:text-primary-200 transition-all duration-300  text-2xl md:text-3xl ' />
            : null
          }
            <p className='flex mt-10 justify-center items-center text-center font-dm text-3xl  lg:text-4xl xl:text-5xl tracking-wide focus:outline-none focus:ring-2 focus:ring-primary-300'>{ year } Reading Challenge </p>
          { !goal ?
          <p className="font-poppins text-secondary-200/40 text-sm tracking-wide font-thin md:text-base text-center">You can set reading challenges and track the books you read</p>
            : <p className="font-poppins text-secondary-200/40 text-sm tracking-wide font-thin md:text-base text-center">You have read {count?count:0} book out of { goal }</p>
          } 
          
            <div>
              
          {content}
            </div>
            
        
      </div>
        </div>
       
        {!showStatus ? 
          <div>
            <div className="flex items-center justify-between">
              <p className=" flex justify-center  text-base md:text-2xl lg:text-3xl font-poppins my-10 md:my-20">List of books you have read</p>
              <div className="">
                { percentage === 100 && <Button onClick={ handleStatus }>
                  <div className="flex text-secondary-100 gap-1 items-center">
                    <BsFillBarChartFill/>
                  <p>Status</p>
                  </div>
                </Button> }
              </div>        
            </div>

            
        
        <div className="flex justify-between items-start">

          
      <div className="w-4/5 gap-y-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-start">

          { renderedBook }
          
          </div>
          
          <div className=" flex flex-col gap-16">
            { longest &&
            <div className="flex-col  gap-2 justify-start flex items-start">
          <img  className='w-full' src={longest.thumbnail} alt="" />
              <p className="text-base md:text-xl font-poppins">Longest Book</p>
              <p className="text-base md:text-xl font-poppins">{ longest.pageCount } Pages</p>
              
            </div>
            }
            { shortest && 
            <div className="flex-col gap-2 flex items-start">
              <img className='w-full' src={ shortest.thumbnail } alt="" />
              <p className="text-base md:text-xl font-poppins">Shortest Book</p>
              <p className="text-base md:text-xl font-poppins">{ shortest.pageCount } Pages</p>
            </div>
            }
        </div>
        </div>
          </div>
          : <Status category={ bookCategories }  leastRead={leastReadBook } highestRead={highestReadBook} longest={ longest } shortest={ shortest } books={ booksFromRead } totalPage={ totalPageCount } />}
      </div>
   </div>
  )
}

export default ReadingChallenge
