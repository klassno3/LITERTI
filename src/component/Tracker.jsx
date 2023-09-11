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
      <div id="tracker" className="relative bg-secondary-300 w-96 h-10 ">
        <div className="flex ">

        <div id='tracker-fill' className="absolute top-0 left-0 bg-primary-100 w-1/2 h-full "></div>
        </div>
      </div>
        <p className="text-2xl">

        
       {percentage}%
        </p>
    </div>
  )
}

export default Tracker
