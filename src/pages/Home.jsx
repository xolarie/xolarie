import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import exploreBtn from '/images/explore btn.png'
import requestBtn from '/images/request btn.png'

const servicesText = [
  "Web Dev",
  "UI/UX Design",
  "Mobile App Dev",
  "Backend system",
  "Game Dev",
  "Project mgt",
];

const Home = () => {
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
        className="h-[100vh] w-[100vw] bg-home-bg px-[10vw] py-10 bg-cover"
        style={{
          backgroundSize: "100% 100vh",
        }}
      >
        <div className="grid grid-cols-2 space-x-5">
          <div className="relative">
            {/* <div className="absolute bg-gradient-to-r from-purple-600 to-yellow-500">h111</div> */}
            <div className="overflow-hidden z-20 h-[400px] w-[40vw] rounded-3xl bg-white bg-opacity-30 backdrop-blur-md font-orbitron text-4xl p-10 px-16 font-semibold text-white">
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
                    className="text-5xl text-center bg-gradient-to-r from-[#39FF14] to-[#D9F0FF] bg-clip-text text-transparent"
                  >
                    {servicesText[serviceTextIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
              to drive growth and engagement
              <div className="text-sm font-inter font-light mt-2">
              <p>Partner with Xolarie to create intuitive, scalable solutions that drive results and enhance user engagement.</p>
            </div>
            <div className="grid grid-cols-2 mt-10">
              <button><img src={exploreBtn} alt="" className="w-40 mr-auto" /></button>
              <button><img src={requestBtn} alt="" className="w-40" /></button>
            </div>
            </div>
            
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row">
            <div
              className="bg-grid1_bg bg-center bg-cover bg-no-repeat relative w-[250px] h-[190px] mr-3"
              style={{
                backgroundSize: "250px 190px",
              }}
            ></div>
            <div className="flex flex-col text-white bg-white bg-opacity-30 backdrop-blur-md rounded-3xl px-6 max-w-[230px] max-h-[170px] mt-2 pt-2">
              <h1 className="font-orbitron text-xl pb-2">Creative 
              Solutions</h1>
              <p className="text-sm">Turn visionary ideas into practical solutions that inspire and engage.</p>
            </div>
            </div>
            <div className="flex flex-row mt-4">
            <div className=" bg-white bg-opacity-30 backdrop-blur-md text-white rounded-3xl px-6 pt-2 max-w-[230px] max-h-[180px] ml-3 mt-2 mr-3">
            <h1 className="font-orbitron text-xl pb-2 ">Adaptable
            Systems</h1>
              <p className="text-sm">Enjoy flexible and scalable digital solutions designed to evolve with your business needs</p>
            </div>
            <div
              className="bg-grid4_bg bg-center bg-cover bg-no-repeat w-[250px] h-[190px] mt-2"
              style={{
                backgroundSize: "250px 190px",
              }}
            ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
