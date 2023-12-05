import { Bars3Icon } from "@heroicons/react/24/outline"
import { GlobeAltIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import { Link } from "react-scroll"

export default function Nav() {
  const [click, setClick] = useState<boolean>(false)

  const handleClick = () => {
    setClick(!click)
  }

  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="Home">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Inicio
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Sobre
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Services">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Competências
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Projects">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Projetos
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Contato
            </li>
          </Link>
        </ul>
      </div>
    </>
  )

  return (
    <nav>
      <div
        id="Home"
        className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800"
      >
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">
            <GlobeAltIcon className="w-8 h-8" />
          </span>
        </div>
        <div className="lg:flex md:flex flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-blue-300 transition border-b-2 border-slate-900 hover:border-blue-300  cursor-pointer">
                  Início
                </li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-blue-300 transition border-b-2 border-slate-900 hover:border-blue-300  cursor-pointer">
                  Sobre
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Services">
                <li className="hover:text-blue-300 transition border-b-2 border-slate-900 hover:border-blue-300  cursor-pointer">
                  Competências
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Projects">
                <li className="hover:text-blue-300 transition border-b-2 border-slate-900 hover:border-blue-300  cursor-pointer">
                  Projetos
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="hover:text-blue-300 transition border-b-2 border-slate-900 hover:border-blue-300  cursor-pointer">
                  Contato
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div>{click && content}</div>

        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3Icon className="w-7 h-7" />
          )}
        </button>
      </div>
    </nav>
  )
}
