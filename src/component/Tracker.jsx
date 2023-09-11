import {useEffect} from 'react'

const Tracker = () => {
  const readingGoal = localStorage.getItem( 'readingGoal' )
  const bookCount = localStorage.getItem( 'NumberOfReadBooks' )

  useEffect( () => {
    
    // const tracker = document.getElementById( 'tracker' );
    const tracker_fill = document.getElementById( 'tracker-fill' );

    const fill = ( ( bookCount * 100 ) / readingGoal );

    tracker_fill.style.width = fill + '%';
    

  } )
 
  const percentage = Math.ceil((bookCount*100)/readingGoal)
  return (
    <div className='flex items-center font-poppins gap-5'>
      <div id="tracker" className="relative bg-secondary-300 w-48 md:w-64 lg:w-72 xl:w-96 h-5 md:h-7 lg:h-9  ">
        <div className="flex ">

        <div id='tracker-fill' className="absolute top-0 left-0 bg-primary-100 w-1/2 h-full "></div>
        </div>
      </div>
        <p className="text-base md:text-lg lg:text-2xl">
       {percentage}%
        </p>
      
    </div>
  )
}

export default Tracker
