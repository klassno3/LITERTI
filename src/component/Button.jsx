import ButtonDropDown from "./ButtonDropDown"
import React, { useState } from 'react'
const Button = () => {
      const [ selection, setSelection ] = useState( null );
  const handleSelect = ( option ) => {
    setSelection( option.value )
    
  }
    const options = [
    { label: "Want to Read ", value: "Want to Read " },
    { label: "Currently Reading", value: "Currently Reading" },
    { label: "Did not Finish", value: "Did not Finish" },
    { label: "Read", value: "Read" },
  ];
  return (
    <div>
        <ButtonDropDown   options={ options } selection={ selection } onSelect={ handleSelect } />
     
    </div>
  )
}

export default Button
