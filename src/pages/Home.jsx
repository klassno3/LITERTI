import { useContext } from "react";
import { FetchBooksContext } from "../context/FetchBooksContext";
import BookList from "../component/BooksList";
import Search from "../component/Search";
import Loader from "../component/Loader";
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
  });

  const renderedBooks = result.map( ( book ) => (
    <BookList key={ book.id } book={ book } />
  ) );

  return (
    <div className="w-11/12 mx-auto">
      <Search />
  
           
      <div className="grid  py-10 justify-center items-start grid-cols-1 md:grid-cols-3 gap-8 lg:grid-cols-5 ">
        {renderedBooks}
</div>
    </div>
  );
};

export default Home;