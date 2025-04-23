import logo from "/images/Logo.png";
import contactUs from "/images/Contact.png"
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

const MobileHeader = () => {

    const [navBarOpen, setNavBarOpen] = useState(false)

    const toggleNavBar = ( ) => {
        setNavBarOpen(!navBarOpen)
    }

  return (
    <div className = "h-[80px] w-[100vw] bg-[#00A8BE] px-1 content-center justify-center flex flex-row overflow-x-hidden">
        <Link to="/">
        <img src={logo} alt="xolarie logo" className="h-14 mr-auto"  />
        </Link>
        <div className="flex flex-row ml-auto mt-4 mr-3">
            <img src={contactUs} alt="contact us" className="h-8 mr-4" />
            <div className="h-8 bg-white px-3  pt-1 rounded-md justify-center ">
                <button onClick={toggleNavBar}>
                {navBarOpen ? <MdOutlineClose className=" font-bold text-2xl text-[#3D1B60]" /> : <FaBars className="font-bold text-2xl text-[#3D1B60]" /> }
                </button>
            </div>
        </div>
    </div>
  )
}

export default MobileHeader