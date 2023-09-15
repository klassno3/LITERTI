import {useEffect,useState} from 'react'

const Range = ( { id ,pageCount} ) => {
  const [ page, setPage ] = useState( 0 );
  
  
   const handleRange = (event) => {
     setPage( event.target.value )
     localStorage.setItem("page",page)
  }


  useEffect( () => {
    
    const slider_input = document.getElementById( `slider_input_${ id }` );
    const slider_thumb = document.getElementById(`slider_thumb_${id}`);
    const slider_line = document.getElementById(`slider_line_${id}`);
    
    const showSliderValue = () => {
      slider_thumb.innerHTML = slider_input.value;
      const bulletPosition = ( slider_input.value / slider_input.max );
      const space = slider_input.offsetWidth - slider_thumb.offsetWidth;
      const fill = ( ( 100 * slider_input.value ) / slider_input.max );
      slider_thumb.style.left = ( bulletPosition * space ) + 'px';
      slider_line.style.width = fill + '%';
      
}
    showSliderValue();
    window.addEventListener( "resize", showSliderValue );
    slider_input.addEventListener( 'input', showSliderValue, false );

  },[id])
  return (
    
      <div className="container ">
              <div className="range-slider">
                <div id={ `slider_thumb_${ id }` } className="range-slider_thumb"></div>
                <div className="range-slider_line">
                  <div id={ `slider_line_${ id }` } className="range-slider_line-fill"></div>
                </div>
                <input type="range" className="range-slider_input" onChange={ handleRange } min={ 0 } max={ pageCount } value={ page } id={ `slider_input_${ id }` } />
              </div>
            </div>
    
  )
}

export default Range
