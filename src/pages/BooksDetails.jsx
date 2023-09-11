import { useContext, useState } from "react";
import { useParams } from 'react-router'
import ButtonDropDown from "../component/ButtonDropDown";
import { FetchBooksContext } from "../context/FetchBooksContext"
import Loader from "../component/Loader";
import { FaStar } from 'react-icons/fa';

const BooksDetails = () => {
  const { id } = useParams();
  const { books } = useContext( FetchBooksContext )
  const [ showText, setShowText ] = useState( false );
  const [ selection, setSelection ] = useState( null );
  const { items } = books;
  
  if ( !books || !books.items ) {
    return <Loader />
  }

  const book = items.find( ( item ) => {
    return item.id === id;
  } )

  
  
  const { volumeInfo } = book;
  const {description,ratingsCount ,publisher, categories, title, publishedDate, authors, imageLinks, pageCount, averageRating } = volumeInfo;
  const author = authors ? authors.join( ", " ) : "Unknown";
  const thumbnail = imageLinks ? imageLinks.thumbnail : "";
  
  const result = [];
  for ( let i = 0; i < averageRating; i++ ) {
    result.push( <div className='text-primary-200'><FaStar size={ 25 } /></div> );
  }
  console.log(pageCount)
  
  const handleClick = () => {
    setShowText( !showText );
  }

  const handleSelect = ( option ) => {
    setSelection( option.value )
  }

  const options = [
    { label: "Want to Read ", value: "Want to Read " },
    { label: "Reading", value: "Reading" },
    { label: "Did not Finish", value: "Did not Finish" },
    { label: "Read", value: "Read" },
  ];

const item = {
  thumbnail: thumbnail,
  author: author,
  publishedDate: publishedDate,
  title: title,
  averageRating:averageRating,
  
};
  
  return (
    
    <div className="max-w-[1440px] mx-auto  ">
      <div className="w-11/12 flex  justify-center mx-auto  mt-20">
        <div className="flex  flex-col md:flex-row justify-center items-start gap-20 font-poppins">
          <div className="flex flex-col">
            <img className="w-[200px] rounded-t-lg " src={ thumbnail } alt="" />
            <ButtonDropDown book={ item}  id={ id } options={ options } selection={ selection } onSelect={ handleSelect } />
          </div>
          <div className="w-full  text-secondary-100">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold md:text-4xl font-dm tracking-wide">{ title }</h1>
                <p className="text-base md:text-xl">{ author }</p>
                <div className="flex gap-12 items-center">
                  <p className="flex gap-2 ">{ result }</p>
                  <p className="text-secondary-100/90">{ averageRating }</p>
                  <p className="text-secondary-100/90">{ ratingsCount ? ratingsCount + " rating" : null }</p>
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-5 items-start">
                  <p className="leading-7 tracking-wide text-secondary-100 text-sm md:text-base">{ showText ? description : description.slice( 0, 500 ) + "............." }</p>
                  <button className="bg-primary-100 flex justify-center transition-all rounded-sm duration-300 hover:bg-primary-200 text-secondary-100 px-2 py-1 md:px-4 md:py-2 text-sm md:text-base" onClick={ handleClick }>{ showText ? "Show Less" : "Show More" }</button>
                </div>
                <div className="text-sm md:text-base  flex flex-col gap-2">
                  <p className="">{ pageCount ? pageCount + " Pages" : null }</p>
                  <div className="flex gap-2">
                    <p className="">Publisher</p>
                    <p className="">{ publisher }</p>
                  </div>
                  <p className="">First Published { publishedDate }</p>
                  <div className="flex gap-5">
                    <p className="">Genres:</p>
                    <p className="underline">{ categories }</p>
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
