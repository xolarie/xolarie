

const BackendDev = () => {
  return (
    <div className="min-h-screen p-8 bg-primary2 text-tertiary2 font-inter">
    <div className="text-center py-12" style={{ backgroundImage: "var(--bg-home-bg)", backgroundSize: "cover" }}>
      <h1 className="text-4xl font-orbitron text-primary1 font-bold">Backend Development</h1>
    </div>
    <div className="max-w-4xl mx-auto mt-10">
      <p className="text-lg text-tertiary1 text-center">
        Creating robust, scalable, and secure server-side applications.
      </p>
      <ul className="mt-6 space-y-4 text-secondary1">
        <li>✅ API Development</li>
        <li>✅ Database Management</li>
        <li>✅ Cloud Integration</li>
      </ul>
    </div>
  </div>
  )
}

export {BackendDev}