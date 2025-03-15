

const GamingDev = () => {
  return (
    <div className="min-h-screen p-8 bg-primary2 text-tertiary2 font-inter">
    <div className="text-center py-12" style={{ backgroundImage: "var(--bg-home-bg)", backgroundSize: "cover" }}>
      <h1 className="text-4xl font-orbitron text-primary1 font-bold">Gaming Development</h1>
    </div>
    <div className="max-w-4xl mx-auto mt-10">
      <p className="text-lg text-tertiary1 text-center">
        Designing immersive and interactive gaming experiences.
      </p>
      <ul className="mt-6 space-y-4 text-secondary1">
        <li>✅ 3D Game Development</li>
        <li>✅ Virtual Reality Support</li>
        <li>✅ AI-Powered Gameplay</li>
      </ul>
    </div>
  </div>
  )
}

export {GamingDev}