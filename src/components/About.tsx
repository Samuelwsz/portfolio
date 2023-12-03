import { AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

export default function About() {
  return (
    <>
      <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-row-reverse justify-between lg:gap-28 items-center">
        <img
          src="https://github.com//samuelwsz.png"
          alt=""
          className="rounded border-2 p-1 border-fuchsia-500 img_glow w-44 h-44"
        />
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
          <h1 className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase">
            About Me
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            dolores laudantium, quis nam, rerum quisquam eos velit adipisci
            voluptatum omnis reiciendis officia enim vel. Neque odio quis eius
            saepe ipsum?
          </p>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-2">
                <a
                  href=""
                  className="text-fuchsia-600 hover:text-fuchsia-500 glow glow:hover p-2 rounded-full"
                >
                  <AiFillGithub className="text-[28px]" />
                </a>
                <a
                  href=""
                  className="text-fuchsia-600 hover:text-fuchsia-500 glow glow:hover p-2 rounded-full"
                >
                  <FaLinkedinIn className="text-[28px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
