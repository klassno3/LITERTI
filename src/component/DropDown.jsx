import React, { useEffect, useState, useRef } from 'react'
import { GoChevronDown} from "react-icons/go"
import { Link } from 'react-router-dom';
const DropDown = ( { options, selection, onSelect } ) => {
  const [ isOpen, setIsOpen ] = useState( false );
  
  const divEl = useRef();
  useEffect( () => {
    const handler = ( event ) => {
      if ( !divEl.current ) {
        return
      }
      if ( !divEl.current.contains(event.target) ) {
     setIsOpen(false)
   }
      
    }
    document.addEventListener( "click", handler, true );
    return () => {
      document.removeEventListener( "click", handler, true );
    };
  })
  const handleClick = () => {
    setIsOpen( !isOpen );

  }
  const handleOptionClick = (option) => {
    setIsOpen( false );
    
    onSelect( option );
    
  }

const renderedOptions = options.map( ( option ) => {
      
  return ( <Link to={`/${option.value}`} className='pb-2  hover:text-primary-200 text-lg' onClick={()=> handleOptionClick(option) } key={ option.value }>{ option.label }</Link> )
  } ); 
      
 

  return (
    <div ref={divEl} className='cursor-pointer '>
      {/* if selection is null it will print Select.... if it not null it wil print selection.label */}
      <div onClick={ handleClick } className='group relative flex items-center justify-between  gap-4 w-full'>
        <div className={`${selection ? "font-bold text-primary-300" :""}  group-hover:text-primary-300/70  font-inter capitalize`}>My books</div>
        <GoChevronDown className=' group-hover:text-primary-300/70' size={20} />
      </div>
      { isOpen && <Link to={`/${selection}`} className=' absolute text-secondary-100 flex flex-col gap-2 z-50 shadow-xl  py-3 rounded-b-md '>{ renderedOptions } </Link> }
      
    </div>
  )
}

export default DropDown
