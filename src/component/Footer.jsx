import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import  LogoWhite  from "../images/Logo-white.svg"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    
    <div className=" mx-auto ">
      <div className="bg-primary-100 text-secondary-200 mt-36">
        <div className=" max-w-[1440px] mx-auto py-12 flex flex-col gap-6">
          <div className="w-11/12 flex flex-col gap-3 mx-auto">
            <div to="/" className="flex flex-col w-10 sm:w-16">
              <img src={ LogoWhite } alt="" />
            </div>
            <div className="flex flex-col md:flex-row gap-12 md:justify-between">
              <div>
          
              
            <div className="flex flex-col gap-5 ">
              <p className=" font-thin text-secondary-100 text-sm md:text-base tracking-wide font-poppins">
                The easiest way to find and track your books is with Literti.  
              </p>
              <div className="flex gap-3">
                <div className=" cursor-pointer hover:text-secondary-200 text-secondary-100 transition-all duration-200"><FaFacebook size={ 25 } /></div>
                <div className=" cursor-pointer hover:text-secondary-200 text-secondary-100 transition-all duration-200"><FaInstagram size={ 25 } /></div>
                <div className=" cursor-pointer hover:text-secondary-200 text-secondary-100 transition-all duration-200"><FaTwitter size={ 25 } /></div>
              </div>
              </div>
              </div>
              <div className="flex flex-col text-sm md:text-base font-poppins">

            <Link className="hover:underline tracking-wide hover:text-secondary-200 text-secondary-100 transition-all duration-300" to={"/want to read"}>Want To Read</Link>
            <Link className="hover:underline tracking-wide hover:text-secondary-200 text-secondary-100 transition-all duration-300" to={"/want to read"}>Currently Reading</Link>
            <Link className="hover:underline tracking-wide hover:text-secondary-200 text-secondary-100 transition-all duration-300" to={"/want to read"}>Did Not Finish</Link>
            <Link className="hover:underline tracking-wide hover:text-secondary-200 text-secondary-100 transition-all duration-300" to={"/want to read"}>Read</Link>
            <Link className="hover:underline tracking-wide hover:text-secondary-200 text-secondary-100 transition-all duration-300" to={"/want to read"}>Reading Challenge</Link>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Footer
