import { Link } from "react-scroll"

export default function About() {
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
          className="rounded border-2 p-1 border-blue-300  img_glow w-64 h-64"
        />
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
          <h1
            data-aos="fade-right"
            className="text-[52px] font-semibold mb-8 leading-normal text-blue-300  uppercase"
          >
            Sobre mim
          </h1>
          <p data-aos="fade-left" className="text-justify">
            Neste momento, estou me dedicando ao aprimoramento das minhas
            habilidades em tecnologias atuais e aprofundando meu conhecimento
            nas que já possuo proficiência, em busca de uma vaga no mercado de
            trabalho.
          </p>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-2">
                <Link to="Home">
                  <button className="neno-button neno-button:hover shadow-xl hover:shadow-blue-300/50 text-white border-2 hover:bg-blue-400  border-blue-300  rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                    Início
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
