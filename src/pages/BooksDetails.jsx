import { FetchBooksContext } from "../context/FetchBooksContext"
import { useContext, useState } from "react";
import { useParams } from 'react-router'
import Loader from "../component/Loader";
import { FaStar } from 'react-icons/fa';

const BooksDetails = () => {
  const [ showText, setShowText ] = useState( false );
  const { books } = useContext( FetchBooksContext )
  const { id } = useParams();
  const { items } = books;
  

    if (!books || !books.items) {
    return <Loader/>
  }

  const book = items.find( ( item ) => {
    return item.id === id ;
  })
  
  const { volumeInfo } = book
  const { description,ratingsCount ,publisher, categories, title, publishedDate, authors, imageLinks, pageCount, averageRating } = volumeInfo;
  
  const author = authors ? authors.join( ", " ) : "Unknown";
  const thumbnail = imageLinks ? imageLinks.thumbnail : "";
  
    const result = [];
  for ( let i = 0; i < averageRating; i++) {
      result.push(<div className='text-primary-200'><FaStar size={25}/></div>);
    }
   
  const handleClick = () => {
    setShowText( !showText );
  }
  return (
    <div className="max-w-[1440px mx-auto]  ">

    <div className="w-11/12 mx-auto  mt-20">
      <div className="flex items-start gap-20 font-poppins">
       
          
        <img className="w-1/4 rounded-3xl rounded-l-none" src={ thumbnail } alt="" />
    
        
        <div className="w-1/2  text-secondary-100">
          <div className="flex flex-col gap-7">

        <div className="flex flex-col gap-2">
   
            
      <h1 className="text-4xl font-semibold">{ title}</h1>
          
          <p className="text-xl">{ author }</p>
          <div className="flex gap-12 items-center">

            <p className="flex gap-2 ">{ result }</p>
            <p className="text-secondary-100/90">{ averageRating }</p>
            <p className="text-secondary-100/90">{ ratingsCount} rating</p>
          </div>
            </div>
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-5 items-start">
                
                <p className="leading-7 tracking-wide text-secondary-100">{ showText ? description : description.slice(0,500) + "............." }</p>
                <button className="bg-primary-100 transition-all rounded-sm duration-300 hover:bg-primary-200 text-secondary-100 px-4 py-1.5" onClick={ handleClick }>{ showText ? "Show Less" : "Show More"}</button>
</div>
          <div className="text-base  flex flex-col gap-2">
            <p className="">{ pageCount} pages</p>
         
                  <div className="flex gap-2">
            <p className="">Publisher</p>
            <p className="">{ publisher}</p>
          </div>
            <p className="">First Published { publishedDate }</p>
            
          <div className="flex gap-5">
            <p className="">Genres:</p>
            <p className="underline">{ categories}</p>
          </div>
          </div>

      
        </div>
          </div>
    </div>
      </div>
            </div>
    </div>
  )
}

export default BooksDetails
