import{Link} from "react-router-dom"

const ImagesList = ({book}) => {

    
   const { id, pageCount, title, author, thumbnail, averageRating } = book;

  return (
    <div>
     <Link to={`/book/${id}`}>
          <img className="w-3/4" src={ thumbnail } alt="" />
          </Link>
    </div>
  )
}

export default ImagesList
