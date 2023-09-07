import { useContext } from "react";
import { FetchBooksContext } from "../context/FetchBooksContext";
import BookList from "../component/BooksList";
import Search from "../component/Search";
import Loader from "../component/Loader";
import Hero from "../component/Hero";

const Home = () => {
  const { books } = useContext(FetchBooksContext);

  // Check if books or items is undefined
  if (!books || !books.items) {
    return <Loader/>
  }

  const { items } = books;

  const result = items.map(({ id, volumeInfo }) => {
    const { description, title,publishedDate, authors, imageLinks, pageCount,averageRating } = volumeInfo;

    const author = authors ? authors.join(", ") : "Unknown";
    const thumbnail = imageLinks ? imageLinks.thumbnail : "";

    return { id, description, publishedDate, title, author, thumbnail, pageCount,averageRating };
  } );

  

  const renderedBooks = result.map( ( book ) => (
    <BookList key={ book.id } book={ book } />
  ) );

  return (
    <div className="max-w-[1440px] mx-auto  ">
      <div className="w-11/12 mx-auto">
 <Hero/>
        <Search />
        <div className=" grid py-10 w-8/12 md:w-full mx-auto justify-center items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:grid-cols-5 xl:grid-cols-6 ">
          { renderedBooks }
        </div>
      </div>
    </div>

  );
};

export default Home;