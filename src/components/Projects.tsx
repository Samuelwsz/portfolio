export default function Projects() {
  return (
    <div
      id="Projects"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-blue-300">
        Projects
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <a href="">
          <p className="text-white">a</p>
          <img
            data-aos="fade-up"
            src="https://github.com//samuelwsz.png"
            alt=""
            className="text-[26px] flex items-center justify-center font-semibold text-blue-300 rounded-3xl h-40 w-64 p-1 border-2 border-blue-300 b_glow"
          />
        </a>
        <a href="">
          <img
            src="https://github.com//samuelwsz.png"
            alt=""
            className="text-[26px] flex items-center justify-center font-semibold text-blue-300 rounded-3xl h-40 w-64 p-1 border-2 border-blue-300 b_glow"
          />
        </a>
        <a href="">
          <img
            src="https://github.com//samuelwsz.png"
            alt=""
            className="text-[26px] flex items-center justify-center font-semibold text-blue-300 rounded-3xl h-40 w-64 p-1 border-2 border-blue-300 b_glow"
          />
        </a>
      </div>
    </div>
  )
}
