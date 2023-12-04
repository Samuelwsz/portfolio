import { AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Banner() {
  //animção ao carregar os componentes
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    })
  }, [])

  return (
    <div
      //comando para as animações
      // data-aos="fade-up"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex flex-col-reverse lg:flex-row md:flex-row justify-between lg:gap-28 items-center"
    >
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
        
          className="text-[52px] font-semibold mb-8 leading-normal"
        >
          Welcome to <span className="text-blue-300">My Website</span>
        </h1>
        <p  >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolores
          laudantium, quis nam, rerum quisquam eos velit adipisci voluptatum
          omnis reiciendis officia enim vel. Neque odio quis eius saepe ipsum?
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                href=""
                className="text-blue-300 hover:text-blue-300 glow glow:hover p-2 rounded-full"
              >
                <AiFillGithub className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-blue-300 hover:text-blue-300 glow glow:hover p-2 rounded-full"
              >
                <FaLinkedinIn className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
     //   data-aos="fade-left"
        src="https://github.com//samuelwsz.png"
        alt=""
        className="rounded-full border-2 p-1 border-blue-300 img_glow w-44 h-44"
      />
    </div>
  )
}
