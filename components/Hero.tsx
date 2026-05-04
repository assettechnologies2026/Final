export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/Banner.webp')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative text-center text-white max-w-2xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Cutting Edge IT Solutions That Power Your Business Growth
        </h1>

        <p className="mt-4 text-sm md:text-base">
          From hardware infrastructure to CCTV security, and forensic workstations and servers.
        </p>

        {/* 
           CHANGED: 
           'flex-col' stacks them on mobile.
           'md:flex-row' puts them side-by-side on desktop.
           'items-center' ensures they stay centered when stacked.
        */}
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <button className="w-full md:w-auto bg-white text-black px-6 py-2 cursor-pointer hover:bg-[#0000ff] hover:text-white transition-colors">
            <a href="#contact" className="block w-full">Get Free Consultation</a>
          </button>
          
          <button className="w-full md:w-auto border border-white px-6 py-2 cursor-pointer hover:text-green-400 hover:border-green-400 transition-colors">
            <a
              href="https://wa.me/919284232669?text=Hi%20I%20want%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              WhatsApp
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}