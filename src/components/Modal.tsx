import { XMarkIcon } from "@heroicons/react/24/solid"
import { AiFillGithub } from "react-icons/ai"
import * as Dialog from "@radix-ui/react-dialog"

interface ModalProps {
  nome: string
  linkProjeto: string
  linkGithub: string
  tecnologias: string
}

export default function Modal({
  nome,
  linkProjeto,
  linkGithub,
  tecnologias,
}: ModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-800 p-8 rounded-lg shadow-md w-auto sm:w-1/2 md:w-2/5 lg:w-2/5 border-2 border-blue-300 text-blue-200">
        <div>
          <Dialog.Title className="text-center font-semibold uppercase mb-2">{nome}</Dialog.Title>
          <div>
            <h1>Tecnologias Utilizadas</h1>
            <p>{tecnologias}</p>
            <a href={linkProjeto} target="_blank">
              Link do projeto
            </a>
            <a href={linkGithub} target="_blank">
              <AiFillGithub className="w-5 h-5" />
            </a>
          </div>
        </div>

        <Dialog.Close className="absolute top-2 right-2 text-white ">
          <XMarkIcon className="w-6 h-6" />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
