import React, { useState } from 'react'
import Tracker from './Tracker';

const ChallengeEdit = ( { edit, onGoalChange } ) => {
  const [ newGoal, setNewGoal ] = useState('');
  const [ openTracker,setOpenTracker] = useState(false);
  // const goal = localStorage.getItem( 'readingGoal' );
  const handleSubmit = (event) => {
    event.preventDefault(); 
    onGoalChange( newGoal );
    setOpenTracker( true )
    localStorage.setItem( 'readingGoal', newGoal )
    edit(false)
  };

  const handleChange = (event) => {
    setNewGoal(event.target.value);
  };
  
  return (
    <div>
    
      { !openTracker ?
      <form onSubmit={ handleSubmit} className="edit-form">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            
        <label htmlFor="reading-goal" className="font-poppins text-base md:text-lg ">Change Reading Goal : </label>
      <input
                onChange={ handleChange }
                id='reading-goal'
                type="number"
                value={newGoal}
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
        :
          <Tracker/>}

   
      
    </div>

  )
}

export default ChallengeEdit
