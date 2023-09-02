import React,{useState,useEffect,useRef} from 'react'
import Logo from "../images/Logo.svg"
import Menu from "../images/menu-alt.svg"
import Close from "../images/close.svg"
import { Link, useLocation } from "react-router-dom"
import DropDown from "../component/DropDown"

const Navigation = () => {

  const [ active, setActive ] = useState( false );
  const [ selectedTab, setSelectedTab ] = useState( "home" );
    const [ selection, setSelection ] = useState( null );
  const [ open, setOpen ] = useState( false );
  const location = useLocation();
   const isActive = () => {
    window.scrollY > 0 ? setActive( true ) : setActive( false )
  }

  useEffect( () => {
    window.addEventListener( "scroll", isActive )
    return () => {
      window.removeEventListener( "scroll", isActive );
    }
  }, [] );

   const divEl = useRef();
  useEffect( () => {
    const handler = ( event ) => {
      if ( !divEl.current ) {
        return
      }
      if ( !divEl.current.contains(event.target) ) {
     setOpen(false)
   }
      
    }
    document.addEventListener( "click", handler, true );
    return () => {
      document.removeEventListener( "click", handler, true );
    };
  })
  useEffect( () => {
    if ( location.pathname === "/" ) {
      setSelectedTab( "home" )
     
      
    }
    else if ( location.pathname === "/challenge" ) {
      setSelectedTab( "challenge" )
    }
    else if ( location.pathname === "/my books" ) {
      setSelectedTab( "my books" )
    }
  
    
  }, [ location.pathname ] )
  
      useEffect( () => {
    window.scrollTo(0, 0);
  }, [location]);
  
  const handleClose = () => {
    setOpen( !open );
  }
  const options = [
    { label: "Want to Read ", value: "Want to Read " },
    { label: "Reading", value: "Reading" },
    { label: "Did not Finish", value: "Did not Finish" },
    { label: "Read", value: "Read" },
  ];

  const handleSelect = ( option ) => {
    setSelection( option.value )
    
  }
  const handleNavigation = () => {
    setOpen( false );
    setSelection( null );
    
  }
  return (
    
    <div className={`sticky top-0 left-0 z-40  ${ active ? "bg-tertiary-100 shadow-lg  text-secondary-200" :"  bg-tertiary-100 shadow-none text-secondary-200" }`}>
      <div className="max-w-[1440px mx-auto]  ">
        
      <div className="w-11/12 mx-auto ">
   
      <div className="flex justify-between items-center  pt-4 pb-3 md:pt-6 md:pb-4 ">
        
          <Link onClick={ handleNavigation } to="/" className="flex flex-col w-8 sm:w-16">

            <img src={ Logo } alt="" />
        </Link>
          <div className="lg:hidden cursor-pointer">

            <img onClick={ handleClose } src={ Menu } alt="" className=" sm:w-12 w-10" />
            
          </div>
          <div ref={divEl} className={ `lg:hidden fixed transition-all duration-500 flex   justify-center items-center shadow-lg w-10/12 h-screen bg-tertiary-100  ${ open ? " top-0 right-0" : "top-0 right-0 translate-x-full" }` }>

            <img onClick={ handleClose } src={ Close } alt="" className={ `${ open ? "block" : "hidden" } cursor-pointer fixed top-[40px] right-[40px] sm:w-7 w-6 ` } />
            
           <div className="flex  flex-col gap-10 font-poppins text-lg text-tertiary-300 tracking-wide">
          <Link onClick={handleNavigation} className={`cursor-pointer  hover:text-primary-200 ${ selectedTab === 'home' && selection === null ? "text-primary-300 font-semibold" : '' } `} to="/">Home</Link>
          <Link onClick={handleNavigation}  className={`cursor-pointer  hover:text-primary-200 ${ selectedTab === 'challenge' && selection === null ? "text-primary-300 font-semibold" : '' } `} to="/challenge">Reading challenge</Link>
                         <div  className="">  <DropDown title={"My Books"}  options={ options } selection={ selection } onSelect={ handleSelect } /></div> 

              
            </div>
          </div>
        
        <div className=" hidden lg:flex gap-16 font-poppins text-lg text-tertiary-300 tracking-wide">
            <Link onClick={handleNavigation}  className={`cursor-pointer  hover:text-primary-300 ${ selectedTab === 'home' && selection === null ? "text-primary-200 font-semibold" : '' } `} to="/">Home</Link>
          <Link  onClick={handleNavigation} className={`cursor-pointer hover:text-primary-300  ${ selectedTab === 'challenge' && selection === null ? "text-primary-200 font-semibold" : '' } `} to="/challenge">Reading Challenge</Link>
              <div className=""><DropDown title={"My Books"} options={ options } selection={ selection } onSelect={ handleSelect } /></div>
          </div>

     </div>
    </div>
     </div>
    </div>
    
  )
}

export default Navigation
