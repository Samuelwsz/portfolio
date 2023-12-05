import * as Dialog from "@radix-ui/react-dialog"
import Modal from "./Modal"
import alurageek from "../assets/alurageek.png"
import codechella from "../assets/codechela.png"

export default function Projects() {
  return (
    <div
      id="Projects"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-blue-300">
        Projetos
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <img
              data-aos="fade-up"
              src={alurageek}
              alt="alurageekchalenge5"
              className="text-[26px] flex items-center justify-center font-semibold text-blue-300 rounded-3xl h-40 w-64 p-1 border-2 border-blue-300 cursor-pointer b_glow"
            />
          </Dialog.Trigger>
          <Modal
            nome="Desafio AluraGeek"
            descricao="Challenge front end 5 da Alura"
            linkProjeto="https://challengefrontend5-alura-geek.vercel.app/"
            linkGithub="https://github.com/Samuelwsz/challengefrontend5AluraGeek"
            tecnologias={[
              "React",
              "React Router DOM",
              "TypeScript",
              "Emotion",
              "Vite",
            ]}
          />
        </Dialog.Root>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <img
              data-aos="fade-up"
              src={codechella}
              alt="alurageekchalenge5"
              className="text-[26px] flex items-center justify-center font-semibold text-blue-300 rounded-3xl h-40 w-64 p-1 border-2 border-blue-300 cursor-pointer b_glow"
            />
          </Dialog.Trigger>
          <Modal
            nome="Desafio CodeChella"
            descricao="Challenge front end 6 da Alura"
            linkProjeto="https://challengefrontend6-code-chella.vercel.app/"
            linkGithub="https://github.com/Samuelwsz/challengefrontend6CodeChella"
            tecnologias={[
              "React",
              "React router dom",
              "TypeScript",
              "Emotion",
              "Vite",
            ]}
          />
        </Dialog.Root>
      </div>
    </div>
  )
}
