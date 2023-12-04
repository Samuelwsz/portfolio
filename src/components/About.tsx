export default function About() {
  const handleButtonClick = () => {
    // Rola a página de volta para o topo
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adiciona um efeito de rolagem suave
    })
  }

  return (
    <>
      <div
        id="About"
        className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex flex-col lg:flex-row md:flex-row justify-between lg:gap-28 items-center"
      >
        <img
          data-aos="fade-down"
          src="https://github.com//samuelwsz.png"
          alt=""
          className="rounded border-2 p-1 border-blue-300  img_glow w-44 h-44"
        />
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
          <h1
            data-aos="fade-right"
            className="text-[52px] font-semibold mb-8 leading-normal text-blue-300  uppercase"
          >
            About Me
          </h1>
          <p data-aos="fade-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            dolores laudantium, quis nam, rerum quisquam eos velit adipisci
            voluptatum omnis reiciendis officia enim vel. Neque odio quis eius
            saepe ipsum?
          </p>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-2">
                <button
                  onClick={handleButtonClick}
                  className="neno-button neno-button:hover shadow-xl hover:shadow-blue-300/50 text-white border-2 hover:bg-blue-400  border-blue-300  rounded-lg py-4 px-8 uppercase relative overflow-hidden"
                >
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
