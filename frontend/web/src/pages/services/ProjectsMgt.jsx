import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";
import CTA from "/images/CTA.png"
import SubProjectMgt from "../../components/SubProjectMgt";


const ProjectsMgt = () => {
  return (
    <div className="bg-[#00BCD4] px-4">
      <div className="flex flex-row space-x-2 py-10 font-inter">
        <Link to="/" className="text-white">Home</Link>
        <FaGreaterThan className="text-white text-[10px] flex mt-2" />
        <p className="text-white ">Services</p>
        <FaGreaterThan className="text-white text-[10px] flex mt-2" />
        <Link to="/services/project-management" className="text-[#AEFFA1]"> Project management</Link>
      </div>
      <div>
        <div>
          <div className="space-y-5">
            <h1 className="font-orbitron text-[#3D1B60] font-extrabold text-2xl"> Project management</h1>
            <p className="text-[#3D1B60] font-inter font-semibold ">Efficiently manage projects from concept to completion with our expert guidance and tools.</p>
            <p className="font-inter text-sm text-[#3D1B60]">Our experienced project managers ensure smooth execution from idea to launch. We combine agile methods with clear communication and stakeholder alignment to drive progress and deliver results.</p>
          </div>
          <SubProjectMgt />
        </div>
      </div>
      <div className="relative py-14">
        <img src={CTA} alt="" />
        <button className="absolute bottom-0 h-14 w-[45vw] mb-16">
        </button>
      </div>
  </div>
  )
}

export { ProjectsMgt }