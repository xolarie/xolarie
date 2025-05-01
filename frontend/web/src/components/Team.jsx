import { teamMembers } from "../constants"


const Team = () => {
  return (
    <div>
        <ul className="flex flex-row overflow-x-scroll pb-12">
          { teamMembers.map((team, index) => (
            <li key={index} className="">
              <div className="w-[70vw] content-center justify-center flex flex-col items-center text-center">
              <img src={team.image} alt="team image" className="w-full h-full object-cover ml-5"/>
              <div className="content-center justify-center w-full flex flex-col text-center">
                <p className="font-inter font-bold text-[#3D1B60]">{team.name}</p>
                <p className="font-inter text-[#3D1B60]">{team.role}</p>
              </div>
              </div>
            </li>
            
          ))}
        </ul>
    </div>
  )
}

export default Team