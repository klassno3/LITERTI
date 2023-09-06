import React, { useEffect, useState, useRef ,useContext} from 'react'
import { GoChevronDown} from "react-icons/go"
import { MyBooksContext } from '../context/MyBooksContext';
const ButtonDropDown = ( { options, selection, onSelect,book,id } ) => {
  const [ isOpen, setIsOpen ] = useState( false );
  const {addToCurrentlyReading,addToWantToRead,addToDidNotFinish,addToRead}=useContext(MyBooksContext)
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

  const handleOptionClick = (option, book, id) => {
  setIsOpen(false);
  console.log(option.value);
  
  if (option.value === "Want to Read ") {
    addToWantToRead(book, id);
  } else if (option.value === "Reading") {
    addToCurrentlyReading(book, id);
  }else if (option.value === "Read") {
    addToRead(book, id);
  } else if (option.value === "Did not Finish") {
    addToDidNotFinish(book, id);
  }
  onSelect(option);
  
};

const renderedOptions = options.map( ( option ) => {
      
  return ( <div className=' hover:text-tertiary-100 transition-all duration-300' onClick={()=> handleOptionClick(option,book,id) } key={ option.value }>{ option.label }</div> )
  } ); 
      
 

  return (
    <div ref={divEl}  className={`cursor-pointer bg-primary-100 rounded-t-none  group transition-all duration-300 ${isOpen ? "rounded-none  " : "rounded-t-none  rounded-b-md  "} `}>
      {/* if selection is null it will print Select.... if it not null it wil print selection.label */}
      <div onClick={ handleClick } className={ `relative rounded-full flex justify-between items-center   gap-4 font-poppins p-3   transition-all duration-300 ` }>
       
        <div className='font-poppins text-sm capitalize'>{ selection ? selection : "Want to Read" }</div>
        <GoChevronDown className={` transition-all duration-300  ${isOpen ? "rotate-180" : ""}`} size={20} />
      { isOpen && <div className=' absolute w-full top-10 right-0 flex flex-col items-start gap-2 font-poppins bg-primary-100  z-50 px-3 py-4 transition-all duration-300 rounded-b-md '>{ renderedOptions } </div> }
        </div>
        
      
    </div>
    
  )
}

export default ButtonDropDown
