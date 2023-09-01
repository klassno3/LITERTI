
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import  LogoWhite  from "../images/Logo-white.svg"

const Footer = () => {
  return (
      <div className="bg-primary-100 text-secondary-200 mt-36">
    <div className="w-11/12 mx-auto py-12 flex flex-col gap-6">
      <div  to="/" className="flex flex-col w-12 sm:w-16">
            <img src={ LogoWhite } alt="" />
        </div>
        <div className="flex flex-col gap-5 ">

          <p className="w-1/2  font-poppins">
            The easiest way to find and track your books is with Literti. It's a free app that lets you scan the barcode of any book to add it to your library.         </p>
          <div className="flex gap-3">
            <div className=" cursor-pointer hover:text-secondary-300 transition-all duration-200"><FaFacebook  size={30}/></div>
            <div className=" cursor-pointer hover:text-secondary-300 transition-all duration-200"><FaInstagram size={30}/></div>
            <div className=" cursor-pointer hover:text-secondary-300 transition-all duration-200"><FaTwitter size={30}/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
