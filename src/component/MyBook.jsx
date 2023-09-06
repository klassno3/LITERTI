import React, { useContext } from 'react'
import {BsTrash3Fill} from 'react-icons/bs';
import { AiFillStar,AiOutlineStar} from 'react-icons/ai';
import { MyBooksContext } from '../context/MyBooksContext';
const MyBook = ( { book, rating ,name} ) => {
  const {removeBook } = useContext(MyBooksContext)
  const {id,pageCount, title, author, thumbnail, averageRating } = book;
  
  
  const result = [];
  for ( let i = 0; i < averageRating; i++ ) {
    result.push( <div className='text-primary-200'><AiFillStar size={ 20 } /></div> );
  }



  return (
   <div className="max-w-[1440px] mx-auto  ">
      <div className="flex gap-5 mx-auto  mt-10">
       
          <div className="flex flex-col gap-2">
          <img className=" " src={ thumbnail } alt="" />
          <button className="bg-primary-100 flex justify-center transition-all rounded-sm duration-300 hover:bg-primary-200 text-secondary-100 px-4 py-2" onClick={ () => removeBook( id, name ) }><BsTrash3Fill/></button>
          

          </div>
          <div className="w-full  text-secondary-100">
           
              <div className="flex flex-col gap-2">
                <h1 className="text-lg  ">{ title }</h1>
                <p className="text-base font-thin">{ author }</p>
                <div className="flex gap-12 items-center">
                  <p className="flex gap-2 ">{ result }</p>
              <p className="text-secondary-100/90">{ averageRating }</p>
              
            </div>
            <p className="">{ pageCount ? pageCount + " Pages" : "" }</p>
            <div className="">
              { rating ?
                <div className="flex gap-2  ">

              <AiOutlineStar  className='cursor-pointer' />
              <AiOutlineStar className='cursor-pointer' />
              <AiOutlineStar className='cursor-pointer' />
              <AiOutlineStar className='cursor-pointer' />
              <AiOutlineStar className='cursor-pointer' /> 
                </div>
                : "" }
            
            
            
            </div>
            

            
          
           
            </div>
        
        </div>
      </div>
    </div>

    
  )
}

export default MyBook
