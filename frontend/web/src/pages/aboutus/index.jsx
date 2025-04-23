import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div className="bg-[#00BCD4] px-4">
      <div className="flex flex-row space-x-2 py-10 font-inter">
        <Link to="/" className="text-white">Home</Link>
        <FaGreaterThan className="text-white text-[10px] flex mt-2" />
        <Link to="/about" className="text-[#AEFFA1]">About Us</Link>
      </div>
      <div>
        <h1 className=" font-orbitron font-bold text-[#3D1B60] text-2xl my-4">About Us</h1>
        <h4 className=" font-inter font-bold text-[#3D1B60] pb-5">Our Story</h4>
        <p></p>
      </div>
    </div>
  )
}

export default AboutUs