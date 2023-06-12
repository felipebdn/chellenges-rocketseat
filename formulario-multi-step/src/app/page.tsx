import { ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col rounded-md border border-gray-100 bg-white p-8">
        <header className="flex justify-around gap-8">
          <div className="flex items-center gap-2">
            <div
              aria-selected={true}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 leading-none aria-selected:bg-purple-mid "
            >
              1
            </div>
            <span>Contato</span>
          </div>
          <span>
            <ChevronRight />
          </span>
        </header>
        <form>
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              name="nome"
              placeholder="Como prefere ser chamado"
            />
          </div>
          <div>
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              name="telefone"
              placeholder="Digite seu número de WhatsApp"
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Como prefere ser chamado"
            />
          </div>
          <button>Continuar</button>
        </form>
      </div>
    </div>
  )
}
