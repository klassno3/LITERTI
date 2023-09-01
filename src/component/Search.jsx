import { useContext, useState } from "react";
import {FaSearch} from "react-icons/fa"
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
    console.log(searchTerm)
    
  }
  return (
    <div className="mt-16 mb-6">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between gap-4 px-5 py-3 bg-secondary-200 rounded-md w-1/4">
          <input value={searchTerm} onChange={ handleChange } className="focus:outline-none focus:shadow-outline text-tertiary-100/70 font-poppins  " type="search " placeholder="Search By Author, Title....." />
          <button  className="text-tertiary-100"><FaSearch size={20}/></button>
        </div>
      </form>
    </div>
  )
}

export default Search
