


const Home = () => {
  return (
    <>
    <div className="h-[100vh] w-[100vw] bg-home-bg px-[5vw] py-10" style={{
      backgroundSize: "100% 100vh"
    }}>
      <div className="grid grid-cols-2">
        <div className="relative">
          {/* <div className="absolute bg-gradient-to-r from-purple-600 to-yellow-500">h111</div> */}
        <div className="overflow-hidden z-20 h-[450px] w-[38vw] rounded-3xl bg-white bg-opacity-30 backdrop-blur-md font-orbitron text-4xl p-10 font-semibold text-white">Innovative <br />solutions in
        <br /> 

to drive growth and engagement</div>
        </div>
        
        <div className="grid grid-cols-2 space-x-4 space-y-4">
          <div className="bg-grid1_bg bg-center bg-cover bg-no-repeat mt-2" style={{
            backgroundSize: "300px 220px"
          }}></div>
          <div className=" bg-white bg-opacity-30 backdrop-blur-md rounded-3xl"></div>
          <div className=" bg-white bg-opacity-30 backdrop-blur-md rounded-3xl"></div>
          <div className="bg-grid4_bg bg-center bg-cover bg-no-repeat mt-2 rounded-3xl" style={{
            backgroundSize: "300px 220px"
          }}></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home