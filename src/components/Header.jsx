import logo from "/images/Logo.png";
import contactButtonImg from "/images/contact_us_buttom.png";
import { navDatas } from "../constants";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropDown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-[100vw] h-16 bg-header-bg px-16 flex flex-row items-center absolute z-30">
      <div>
        <img src={logo} alt="Logo" className="h-14 mr-14" />
      </div>
      <nav>
        <ul className="flex justify-center items-center relative">
          {navDatas.map((item, index) => (
            <li
              key={index}
              className="relative flex text-blue-300 mr-8 items-center cursor-pointer"
              onMouseEnter={() => toggleDropDown(index)}
            >
              {item.page}
              {item.dropdown && (
                <>
                  <IoIosArrowDown />
                  {activeDropdown === index && (
                    <ul className="absolute top-8 left-0 bg-[#58AAB8] text-white shadow-lg rounded-lg z-10 w-[15vw]"
                    onMouseEnter={() => toggleDropDown(index)}
                    onMouseLeave={() => toggleDropDown(null)}
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex} className="p-2 hover:bg-gray-200">
                          <a href={subItem.path}>{subItem.page}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <button className="ml-auto">
        <img src={contactButtonImg} alt="Contact Us" />
      </button>
    </div>
  );
};

export default Header;
