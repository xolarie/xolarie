import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt"
import exploreBtn from "/images/explore btn.png";
import requestBtn from "/images/request btn.png";

const servicesText = [
  "Web Dev",
  "UI/UX Design",
  "Mobile App Dev",
  "Backend system",
  "Game Dev",
  "Project mgt",
];

const Hero = () => {
  const [serviceTextIndex, setServiceTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setServiceTextIndex((prevIndex) => (prevIndex + 1) % servicesText.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="h-[100vh] w-[100vw] bg-home-bg px-[5vw] py-10 bg-cover "
        style={{
          backgroundSize: "100% 100vh",
        }}
      >
        <div className="">
          <Tilt perspective={1000}>
          <div className="relative rounded-full">
            <div
              className=" z-20 h-[320px] w-[90vw] bg-rectangle_bg3 bg-contain bg-no-repeat bg-center font-orbitron text-xl pt-4 px-8 font-semibold text-white"
              style={{
                backgroundSize : "100% 100%"
              }}
            >
              Innovative <br />
              solutions in
              <br />
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  overflow: "hidden",
                  height: "50px",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={servicesText[serviceTextIndex]}
                    initial={{ y: 0, opacity: 1 }}
                    animate={{ y: -20, opacity: 0 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ position: "absolute" }}
                  >
                    {
                      servicesText[
                        (serviceTextIndex - 1 + servicesText.length) %
                          servicesText.length
                      ]
                    }
                  </motion.div>

                  <motion.div
                    key={servicesText[serviceTextIndex] + "-new"}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ position: "absolute" }}
                    className="text-3xl text-center bg-gradient-to-r from-[#39FF14] to-[#D9F0FF] bg-clip-text text-transparent"
                  >
                    {servicesText[serviceTextIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
              to drive growth and engagement
              <div className="text-sm font-inter font-light mt-2">
                <p>
                  Partner with Xolarie to create intuitive, scalable solutions
                  that drive results and enhance user engagement.
                </p>
              </div>
              <div className="grid grid-cols-2 mt-6">
                <button>
                  <img src={exploreBtn} alt="" className="w-24 mr-auto" />
                </button>
                <button>
                  <img src={requestBtn} alt="" className="w-24" />
                </button>
              </div>
            </div>
          </div>
          </Tilt>

          <div className="flex flex-col w-[90vw] px-2">
            <div className="flex flex-row w-full">
              <div
                className="bg-grid1_bg bg-center bg-contain bg-no-repeat relative w-[40vw] h-[190px] mr-3"
                style={{
                  backgroundSize: "100% 80%",
                }}
              ></div>
              
              <Tilt
                className="flex flex-col text-white  px-6 w-[40vw] bg-rectangle_bg3 bg-contain bg-center bg-no-repeat max-h-[170px] pt-2 cursor-pointer mt-1"
                tiltEnable={false} scale={1.1} transitionSpeed={2500}
                style={{
                  backgroundSize : "100% 80%"
                }}
              >
                <h1 className="font-orbitron text-sm pb-2 mt-3">
                  Creative Solutions
                </h1>
                <p className="text-[12px]">
                  Turn visionary ideas into practical solutions that inspire and
                  engage.
                </p>
              </Tilt>
              
            </div>
            <div className="flex flex-row">
              <div >
              </div>
              <Tilt
                className=" bg-rectangle_bg5 bg-no-repeat bg-contain bg-center text-white px-6 pt-2 w-[40vw] h-[180px] mt-2 mr-3 cursor-pointer"
                style={{
                  backgroundSize : "100% 78%"
                }}

                tiltEnable={false} scale={1.1} transitionSpeed={2500}
              >
                <h1 className="font-orbitron text-sm pb-2 mt-3 ">
                  Adaptable Systems
                </h1>
                <p className="text-[12px]">
                  Enjoy flexible and scalable digital solutions designed to
                  evolve with your business needs
                </p>
              </Tilt>
              <div
                className="bg-grid4_bg bg-center bg-cover bg-no-repeat w-[40vw] h-[190px] mt-2"
                style={{
                  backgroundSize: "100% 80%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
