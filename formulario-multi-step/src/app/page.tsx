export default function Home() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label
          className="text-base font-bold leading-normal text-gray-400"
          htmlFor="nome"
        >
          Nome
        </label>
        <input
          className="rounded-sm border border-gray-100 bg-transparent px-4 py-2 text-base font-normal text-gray-400 outline-none placeholder:text-base placeholder:font-normal placeholder:text-gray-200 hover:border-purple-light focus:border-purple-light"
          type="text"
          id="nome"
          placeholder="Como prefere ser chamado"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          className="text-base font-bold leading-normal text-gray-400"
          htmlFor="telefone"
        >
          Telefone
        </label>
        <input
          className="rounded-sm border border-gray-100 bg-transparent px-4 py-2 text-base font-normal text-gray-400 outline-none placeholder:text-base placeholder:font-normal placeholder:text-gray-200 hover:border-purple-light focus:border-purple-light"
          type="text"
          id="telefone"
          placeholder="Digite seu número de WhatsApp"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          className="text-base font-bold leading-normal text-gray-400"
          htmlFor="email"
        >
          E-mail
        </label>
        <input
          className="rounded-sm border border-gray-100 bg-transparent px-4 py-2 text-base font-normal text-gray-400 outline-none placeholder:text-base placeholder:font-normal placeholder:text-gray-200 hover:border-purple-light focus:border-purple-light"
          type="email"
          id="email"
          placeholder="Como prefere ser chamado"
        />
      </div>
      <div className="mt-4 flex w-full justify-end">
        <button className="w-fit rounded-md bg-purple-mid px-8 py-4 text-base font-bold uppercase leading-normal text-white">
          Continuar
        </button>
      </div>
    </form>
  )
}
