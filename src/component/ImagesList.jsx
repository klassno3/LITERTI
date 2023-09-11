

const ImagesList = ({book}) => {

    
   const { thumbnail } = book;

  return (
    <div>
     
          <img className="w-3/4" src={ thumbnail } alt="" />
        
    </div>
  )
}

export default ImagesList
