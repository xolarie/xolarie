import { motion } from "framer-motion"
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc"

const About = () => {

  return (
    <>
    <motion.div variants={textVariant}
    initial="hidden"
    animate="visible"
    >
      <h1 className="font-orbitron font-extrabold text-4xl ">About Us</h1>
      <p className="font-inter mt-5">We are a technology solutions provider focused on delivering high-quality web, app, gaming, and AI-driven systems. Our expertise in backend architecture, UI/UX design, robotics, and animation enables us to build the next generation of digital products. Whether you&#39;re a startup or an established enterprise, we have the tools and expertise to elevate your business.</p>
    </motion.div>
    </>
  )
}

const AboutWrapper = SectionWrapper(About, "About")
export default AboutWrapper