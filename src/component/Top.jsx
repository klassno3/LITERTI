import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
const Top = ( { book } ) => {
  const [ page, setPage ] = useState(0 )
  const {  pageCount, title, author, thumbnail, averageRating } = book;
  
  const handleRange = (event) => {
    setPage( event.target.value )
    
    // const updatedBook = { ...book, Progress: `${parseFloat( page ) } / ${pageCount} ages` };
  


  }
   const result = [];
  for ( let i = 0; i < averageRating; i++ ) {
    result.push( <div className='text-primary-200'><AiFillStar  size={ 25 } /></div> );
  } 

  return (
    <div className="">

      <div className=" flex gap-12 items-start my-20 mb-10">


        <img src={ thumbnail } alt="" className="" />

        <div className=" flex flex-col gap-3">

          <h4 className="text-3xl font-dm">{ title }</h4>

          <h4 className="">{ author }</h4>
          <div className="flex gap-3">
            {result}
          </div>

          <div className="flex gap-4">
            
          <input value={page} onChange={ handleRange } className="" type="range" max={ pageCount } min={ 0 } />
          
          <p className="">{ page}</p>
         </div>

        </div>
      </div>
      <div className="border-b-[1px] border-secondary-100"></div>
    </div>
  );
}

export default Top
