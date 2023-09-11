import { useContext } from "react";
import BookList from "../component/BooksList";
import Search from "../component/Search";
import Loader from "../component/Loader";
import HeroPic from "../images/H.svg"
import { FetchBooksContext } from "../context/FetchBooksContext";

const Home = () => {
  const { books } = useContext(FetchBooksContext);

  // Check if books or items is undefined
  if (!books || !books.items) {
    return <Loader/>
  }

  const { items } = books;

  const result = items.map(({ id, volumeInfo }) => {
    const { description, title, publishedDate, authors, imageLinks, pageCount, averageRating } = volumeInfo;
    const author = authors ? authors.join(", ") : "Unknown";
    const thumbnail = imageLinks ? imageLinks.thumbnail : "";

    return { id, description, publishedDate, title, author, thumbnail, pageCount, averageRating };
    
  } );

  const renderedBooks = result.map( ( book ) => (
    <BookList key={ book.id } book={ book } />

  ) );

  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="w-11/12 mx-auto">
        
    <div className="flex w-full mt-12 flex-col-reverse mx-auto lg:w-full lg:flex-row justify-center ">
      <div className="w-full bg-primary-100 lg:w-1/2 lg:rounded-l-md rounded-b-md lg:rounded-r-none ">
        <div className="flex flex-col lg:items-center gap-4 lg:gap-7 pb-10  pt-10 lg:pt-20  px-5 sm:px-7  md:px-12 lg:px-10 justify-center">
          <div className="flex lg:items-center flex-col-reverse lg:flex-col gap-3 lg:gap-5">
            <h1 className="font-dm text-2xl sm:text-3xl md:text-4xl xl:text-8xl lg:text-center w-full xl:w-3/4">Literti </h1>
          </div>
          <p className="font-poppins text-sm sm:text-lg lg:text-center ">The easiest way to find and track your books is with Literti. You can set reading challenges and track the books you want to read or are currently reading. Literti also has a built-in library where you can store all of your books, and it will automatically track your progress as you read.</p>
        </div>
      </div>
      <div className="w-full bg-primary-100/50 lg:w-1/2 ">
        <img className="w-full   lg:rounded-r-md lg:rounded-l-none rounded-t-md" src={ HeroPic } alt="" />
      </div>
    </div>
        <Search />
        <div className=" grid py-10 w-1/2 sm:w-9/12 md:w-full mx-auto justify-center items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:grid-cols-5 xl:grid-cols-6 ">
          { renderedBooks }
        </div>
      </div>
    </div>

  );
};

export default Home;