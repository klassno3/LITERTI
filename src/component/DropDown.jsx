import React, { useEffect, useState, useRef } from 'react'
import { GoChevronDown } from "react-icons/go"
import { Link } from 'react-router-dom';
const DropDown = ( { options, selection, onSelect} ) => {
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
      
  return ( <Link to={`/${option.value}`} className='pb-2 text-base  hover:text-primary-200' onClick={()=> handleOptionClick(option) } key={ option.value }>{ option.label }</Link> )
  } ); 
      
 

  return (
    <div ref={divEl} className='cursor-pointer '>
      {/* if selection is null it will print Select.... if it not null it wil print selection.label */}
      <div onClick={ handleClick } className='group relative flex items-end justify-between  gap-12 w-full'>
        <div className={`${selection ? "font-semibold text-primary-200" :""}  group-hover:text-primary-300  font-inter capitalize`}>{ selection ? selection : "My Books" }</div>
        <GoChevronDown  className={`transition-all duration-300 ${selection ? "font-semibold text-primary-300" :""} group-hover:text-primary-300/70 ${isOpen ? "rotate-180" : ""}`}  size={25} />
      { isOpen && <Link to={`/${selection}`} className=' absolute top-10 right-0 text-secondary-100 flex flex-col gap-2 z-50 shadow-lg bg-tertiary-100 shadow-primary-200/25 px-3 w-full py-3 rounded-b-md '>{ renderedOptions } </Link> }
      </div>
      
    </div>
  )
}

export default DropDown
