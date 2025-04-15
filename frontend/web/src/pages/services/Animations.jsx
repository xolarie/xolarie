
const Animations = () => {
  return (
    <div className="min-h-screen p-8 bg-primary2 text-tertiary2 font-inter">
    <div className="text-center py-12" style={{ backgroundImage: "var(--bg-home-bg)", backgroundSize: "cover" }}>
      <h1 className="text-4xl font-orbitron text-primary1 font-bold">Animations</h1>
    </div>
    <div className="max-w-4xl mx-auto mt-10">
      <p className="text-lg text-tertiary1 text-center">
        Bringing ideas to life through motion graphics, 3D animations, and VFX.
      </p>
      <ul className="mt-6 space-y-4 text-secondary1">
        <li>✅ 3D Modeling & Rendering</li>
        <li>✅ Motion Graphics</li>
        <li>✅ VFX and CGI Effects</li>
      </ul>
    </div>
  </div>
  )
}

export { Animations }