import React from 'react'

const Button = ({children,onClick}) => {
  return (
    <div>
      <button onClick={ onClick} className="bg-primary-100 flex justify-center transition-all rounded-sm duration-300 hover:bg-primary-200 text-secondary-100 px-2 py-1 md:px-4 md:py-2 text-sm md:text-base">{ children }</button>
    </div>
  )
}

export default Button
