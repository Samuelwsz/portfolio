import { GlobeAltIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { AiFillGithub } from "react-icons/ai"
import * as Dialog from "@radix-ui/react-dialog"

interface ModalProps {
  nome: string
  descricao: string
  linkProjeto: string
  linkGithub: string
  tecnologias: string[]
}

export default function Modal({
  nome,
  descricao,
  linkProjeto,
  linkGithub,
  tecnologias,
}: ModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-800 p-8 rounded-lg shadow-md w-auto sm:w-1/2 md:w-2/5 lg:w-2/5 border-2 border-blue-300 text-blue-200">
        <div>
          <Dialog.Title className="text-center text-lg font-semibold uppercase mb-2">
            {nome}
          </Dialog.Title>
          <p className="text-center my-2">{descricao}</p>
          <div className="flex justify-between">
            <div>
              <h1>Tecnologias Utilizadas</h1>
              <ul>
                {tecnologias.map((tecnologia) => {
                  return <li>{tecnologia}</li>
                })}
              </ul>
            </div>
            <div>
              <h1>Repositorios do projeto</h1>
              <div className="flex items-center justify-center gap-5 mt-2">
                <a href={linkProjeto} target="_blank">
                  <GlobeAltIcon className="w-5 h-5" />
                </a>
                <a href={linkGithub} target="_blank">
                  <AiFillGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Dialog.Close className="absolute top-2 right-2 text-white ">
          <XMarkIcon className="w-6 h-6" />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
