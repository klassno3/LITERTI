import { useContext, useState } from "react";
import { FetchBooksContext } from "../context/FetchBooksContext";

const Search = () => {
  const [ searchTerm, setSearchTerm ] = useState( "" );
  const { fetchBooks } = useContext( FetchBooksContext );

  const handleSubmit =(event)=> {
    event.preventDefault();
    fetchBooks( searchTerm );
    setSearchTerm("")
    
  }
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
    
  }

  return (
    <div className="mt-16 mb-6">
      <form onSubmit={ handleSubmit }>
        <div className="">
          <input value={ searchTerm } onChange={ handleChange } className="w-10/12 lg:w-1/4 md:w-1/2  md:mx-0  mx-auto flex justify-center font-poppins text-tertiary-200 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300 " type="search" placeholder="Search By Author, Title....." />
        </div>
      </form>
    </div>

  )
}

export default Search
