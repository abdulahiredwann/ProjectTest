function HeroSection() {
  return (
    <section
      className="relative h-screen bg-center bg-cover flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('/Images/image1.png')`,
      }}
    >
      {/* Overlay with custom opacity */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#0000009e" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Welcome to the Virtual Office
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="#demo"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            Instant Demo
          </a>
          <a
            href="#setup"
            className="bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            Setup Your Company
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
