import React, { useEffect, useState, useRef } from 'react'
import { GoChevronDown} from "react-icons/go"

const ButtonDropDown = ( { options, selection, onSelect } ) => {
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
      
  return ( <div className=' hover:text-tertiary-100 transition-all duration-300  pb-2' onClick={()=> handleOptionClick(option) } key={ option.value }>{ option.label }</div> )
  } ); 
      
 

  return (
    <div ref={divEl} className='cursor-pointer  group transition-all duration-300 '>
      {/* if selection is null it will print Select.... if it not null it wil print selection.label */}
      <div onClick={ handleClick } className={ `  bg-primary-100 flex justify-between items-center gap-4font-poppins px-3  py-4 w-full group-hover:bg-primary-200 transition-all duration-300 ${isOpen ? "rounded-none  hover:bg-primary-200 " : "rounded-t-none  rounded-b-md  "}` }>
        <div className='font-poppins capitalize'>{ selection ? selection : "Want to Read" }</div>
        <GoChevronDown size={20} />
      </div>
      { isOpen && <div className=' absolute bg-primary-100  font-poppins flex flex-col justify-center items-center gap-2 z-50  shadow-xl px-6  py-4 transition-all duration-300 rounded-b-md  group-hover:bg-primary-200'>{ renderedOptions } </div> }
      
    </div>
  )
}

export default ButtonDropDown
