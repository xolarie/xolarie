import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'
import { motion } from "framer-motion"
import { servicesData }from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"

const Services = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <h1 className="font-orbitron font-extrabold text-4xl">Our Services</h1>
      <p className="font-inter mt-5">Explore our comprehensive range of services, tailored to meet your unique needs.</p>
    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {servicesData.map((service, index) => (
          <VerticalTimelineElement
          key={index}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            position={index % 2 === 0 ? "left" : "right"} // ✅ Alternate positioning
            contentStyle={{background: "#19042D", color: "#fff" }}
          icon={<img src={service.icon} alt={service.title} className="h-10 w-10 rounded-xl object-contain" />}
            iconStyle={{
              background: "#19042D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* ✅ Service Title & Description */}
            <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

const WrappedServices = SectionWrapper(Services, "Services");
export default WrappedServices;