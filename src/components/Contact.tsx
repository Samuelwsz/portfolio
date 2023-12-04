export default function Contact() {
  return (
    <div
      id="Contact"
      className="p-4 lg:p-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-blue-300">
        Contact Me
      </h1>
      <form action="" className="flex flex-col gap-2 lg:w-[65%]">
        <div className="lg:flex gap-6">
          <input
            className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-blue-300 text-slate-500 outline-none b_glow"
            type="text"
          />
          <input
            className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-blue-300 text-slate-500 outline-none b_glow"
            type="text"
          />
        </div>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-blue-300 text-slate-500 outline-none b_glow"
        ></textarea>
        <button
          type="submit"
          className="neno-button shadow-xl hover:shadow-blue-300 text-white border-2 hover:bg-blue-400 border-blue-300 rounded-lg py-4 px-8 uppercase relative overflow-hidden text-xl font-bold my-6 b_glow"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
