import logo from "/images/Logo.png"
import contactButtonImg from "/images/contact_us_buttom.png"
import navDatas from "../data/NavData"
import { IoIosArrowDown } from "react-icons/io"
import { useState } from "react"


const Header = () => {

  const [dropDownOpen, setDropDown] = useState(true);

  // const toggleDropDown = () => {
  //   setDropDown(!dropDownOpen)
  // }



  return (
    <div className=" w-[100vw] h-16 bg-header-bg px-16 flex flex-row  items-center">
        <div>
            <img src={logo} alt="Logo" className="h-14 mr-14"/>
        </div>
        <nav>
            <ul className="flex justify-center items-center">
              {navDatas.map((items, i) => (
                <li key={i} className="flex text-blue-300 mr-8 items-center">{items.page} &#160; <IoIosArrowDown />
                </li>
                
              ))}
            </ul>
        </nav>
        <button className="ml-auto"><img src={contactButtonImg} alt="" /></button>
    </div>
  )
}

export default Header