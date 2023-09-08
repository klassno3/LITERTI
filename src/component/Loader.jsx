import React from 'react'
import { FaSpinner } from "react-icons/fa";
const Loader = () => {
  return (
    <div className="max-w-[1440px mx-auto]  ">
      <div className="w-11/12 mx-auto">
        <div className="my-32 text-primary-100 flex justify-center gap-4 items-center">
          <h1 className="text-2xl font-poppins ">Loading Please Wait </h1>
          <FaSpinner size={ 40 } className="animate-spin" />
        </div>
      </div>
    </div>  

  )
}

export default Loader
