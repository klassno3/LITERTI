import React from 'react'
import { AiFillStar } from 'react-icons/ai';
const Status = ( { longest, shortest, category, totalPage,leastRead,highestRead } ) => {
   const longestRating = [];
  for ( let i = 0; i < longest.averageRating; i++ ) {
   longestRating.push( <div className='text-primary-200'><AiFillStar  size={ 25 } /></div> );
  } 
   const shortestRating = [];
  for ( let i = 0; i < longest.averageRating; i++ ) {
   shortestRating.push( <div className='text-primary-200'><AiFillStar  size={ 25 } /></div> );
  } 
  return (
    <div>
      <div className="flex flex-col mb-20 gap-3">
        <p className="mx-auto flex justify-center text-center text-base md:text-2xl lg:text-4xl font-poppins mt-10 md:mt-20">Congradulation you have completed you reading challenge</p>
        <div className="font-poppins text-secondary-200/60 text-xs tracking-wide font-thin md:text-lg text-center"> <p className="">
        You've made remarkable progress, reading a total of  <span className="text-primary-200">{totalPage}  </span>pages this year!
        </p></div>
      </div>

    

      <div className=" flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-32">
        <div className="flex flex-col gap-5 md:w-1/2 bg-tertiary-200 py-5 px-5 rounded">
        <p className="text-base md:text-lg lg:text-xl font-poppins">Longest book you have read </p> 

            { longest &&
          <div className="flex gap-6 justify-start items-start">
          <img  className='' src={longest.thumbnail} alt="" />
            <div className="flex flex-col gap-2">

              <p className="text-base md:text-lg lg:text-xl  font-poppins">{ longest.title }</p>
              <p className="text-base md:text-lg lg:text-xl  font-poppins">{ longest.author }</p>
              <p className="text-base md:text-lg lg:text-xl  font-poppins">{ longest.pageCount } Pages</p>
            <div className="text-base md:text-lg lg:text-xl  font-poppins flex gap-2">{ longestRating}</div>
            </div>
              
            </div>
            } 
            </div>
        <div className="flex flex-col gap-5 md:w-1/2 bg-tertiary-200 py-5 px-5 rounded">
        <p className="text-base md:text-lg lg:text-xl font-poppins">Shortest book you have read </p> 

            { shortest &&
          <div className="flex gap-6 justify-start items-start">
          <img  className='' src={shortest.thumbnail} alt="" />
            <div className="flex flex-col gap-2">

              <p className="text-base md:text-lg lmd:text-lg lg:text-xl  font-poppins ">{ shortest.title }</p>
              <p className="text-base md:text-lg lmd:text-lg lg:text-xl  font-poppins">{ shortest.author }</p>
              <p className="text-base md:text-lg lmd:text-lg lg:text-xl  font-poppins">{ shortest.pageCount } Pages</p>
            <div className="text-base md:text-lg lmd:text-lg lg:text-xl  font-poppins flex gap-2">{ longestRating}</div>
            </div>
              
            </div>
            } 
            </div>
        
      </div>
  
      <div className="  mt-20 flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-32 ">
        <div className="flex flex-col gap-5 md:w-1/2 bg-tertiary-200 py-5 px-5 rounded">
        <p className="text-base md:text-lg lg:text-xl font-poppins">The lowest Rated Book You've Read </p> 

            { leastRead &&
          <div className="flex gap-6 justify-start items-start">
          <img  className='' src={leastRead.thumbnail} alt="" />
            <div className="flex flex-col gap-2">

              <p className="text-base md:text-lg lg:text-xl  font-poppins">{ leastRead.title }</p>
              <p className="text-base md:text-lg lg:text-xl  font-poppins">{ leastRead.author }</p>
              <p className="text-base md:text-lg lg:text-xl  font-poppins">{ leastRead.pageCount } Pages</p>
            <div className="text-base md:text-lg lg:text-xl  font-poppins flex gap-2">{ longestRating}</div>
            </div>
              
            </div>
            } 
            </div>
        <div className="flex flex-col gap-5 md:w-1/2 bg-tertiary-200 py-5 px-5 rounded">
        <p className="text-base md:text-lg lg:text-xl font-poppins">The highest Rated Book You've Read </p> 

            { highestRead &&
          <div className="flex gap-6 justify-start items-start">
          <img  className='' src={highestRead.thumbnail} alt="" />
            <div className="flex flex-col gap-2">

              <p className="text-base md:text-lg lg:text-xl  font-poppins ">{ highestRead.title }</p>
              <p className="text-base md:text-lg lg:text-xl  font-poppins">{ highestRead.author }</p>
              <p className="text-base md:text-lg lg:text-xl  font-poppins">{ highestRead.pageCount } Pages</p>
            <div className="text-base md:text-lg lg:text-xl  font-poppins flex gap-2">{ longestRating}</div>
            </div>
              
            </div>
            } 
            </div>
        
      </div>
   
    </div>
  )
}

export default Status
