import { MdOutlineEmail } from "react-icons/md"

export default function Footer() {
  return (
    <div className="text-blue-300 text-xl font-semibold bg-slate-800 py-8 flex flex-col text-center gap-2">
      <h1 className="">Desenvolvido por Samuel</h1>
      <h1 className="flex items-center justify-center gap-1">
        <MdOutlineEmail className='w-6 h-6 text-white'/> samuelxwsz@gmail.com
      </h1>
    </div>
  )
}
