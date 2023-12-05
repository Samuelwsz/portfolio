import * as Dialog from "@radix-ui/react-dialog"
import Modal from "./Modal"
import alurageek from "../assets/alurageek.png"
import codechella from "../assets/codechela.png"
import meteora from "../assets/meteora.png"
import aluroni from "../assets/aluroni.png"
import movieapi from "../assets/movieapi.png"
import apiclima from "../assets/apiclima.png"

export default function Projects() {
  return (
    <div
      id="Projects"
      className="p-20 flex flex-col items-center justify-center mb-20"
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

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <img
              data-aos="fade-up"
              src={meteora}
              alt="alurageekchalenge5"
              className="text-[26px] flex items-center justify-center font-semibold text-blue-300 rounded-3xl h-40 w-64 p-1 border-2 border-blue-300 cursor-pointer b_glow"
            />
          </Dialog.Trigger>
          <Modal
            nome="Desafio Meteora"
            descricao="Challenge front end 7 da Alura"
            linkProjeto="https://challenge7meteora.vercel.app/"
            linkGithub="https://github.com/Samuelwsz/challenge7meteora"
            tecnologias={["React", "Emotion", "Vite"]}
          />
        </Dialog.Root>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <img
              data-aos="fade-up"
              src={aluroni}
              alt="alurageekchalenge5"
              className="text-[26px] flex items-center justify-center font-semibold text-blue-300 rounded-3xl h-40 w-64 p-1 border-2 border-blue-300 cursor-pointer b_glow"
            />
          </Dialog.Trigger>
          <Modal
            nome="Projeto Aluroni"
            descricao="Nesse curso da Alura, foi desenvolvido o projeto Aluroni, focado em criar uma tela de cardápio para um restaurante. A interface permite filtrar opções por combos, pratos veganos, carnes e massas, além de incluir um campo de busca. Por exemplo, ao escolher Massas e digitar Da Casa, apenas os macarrões especiais serão exibidos. Também é possível ordenar os resultados por preço, mostrando as massas do menor para o maior valor."
            linkProjeto="https://restaurante-aluroni-blush.vercel.app/"
            linkGithub="https://github.com/Samuelwsz/RestauranteAluroni"
            tecnologias={[
              "React",
              "React router dom",
              "TypeScript",
              "SASS",
              "Vite",
              "CSS modules",
            ]}
          />
        </Dialog.Root>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <img
              data-aos="fade-up"
              src={movieapi}
              alt="alurageekchalenge5"
              className="text-[26px] flex items-center justify-center font-semibold text-blue-300 rounded-3xl h-40 w-64 p-1 border-2 border-blue-300 cursor-pointer b_glow"
            />
          </Dialog.Trigger>
          <Modal
            nome="Movies Lib"
            descricao="Estudei a API do themoviedb utilizando o Axios, seguindo as instruções de um vídeo do canal Matheus Battisti - Hora de Codar. Durante a implementação, integrei o Tailwind CSS e TypeScript, além de realizar algumas modificações adicionais para aprimorar o projeto."
            linkProjeto="https://api-filmes-five.vercel.app/"
            linkGithub="https://github.com/Samuelwsz/APIfilmes"
            tecnologias={[
              "React",
              "React router dom",
              "TypeScript",
              "Axios",
              "Vite",
              "TailwindCSS",
            ]}
          />
        </Dialog.Root>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <img
              data-aos="fade-up"
              src={apiclima}
              alt="alurageekchalenge5"
              className="text-[26px] flex items-center justify-center font-semibold text-blue-300 rounded-3xl h-40 w-64 p-1 border-2 border-blue-300 cursor-pointer b_glow"
            />
          </Dialog.Trigger>
          <Modal
            nome="Consulta do tempo"
            descricao="Estudo da api de clima opemWeather"
            linkProjeto="https://api-clima-hazel.vercel.app/"
            linkGithub="https://github.com/Samuelwsz/APIclima"
            tecnologias={[
              "React",
              "TailwindCSS",
              "Vite",
              "axios",
              "TypeScript",
            ]}
          />
        </Dialog.Root>
      </div>
    </div>
  )
}
