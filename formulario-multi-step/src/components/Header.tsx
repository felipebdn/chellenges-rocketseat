import { ChevronRight } from 'lucide-react'
export function Header() {
  return (
    <header className="mb-8 flex items-center justify-around gap-8 border-b border-gray-100 pb-8">
      <div className="flex items-center gap-2">
        <div
          aria-selected={true}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-sm font-bold leading-none text-gray-200 aria-selected:bg-purple-mid aria-selected:text-white"
        >
          1
        </div>
        <span
          aria-selected={true}
          className="text-base font-bold leading-normal text-gray-200 aria-selected:text-gray-400"
        >
          Contato
        </span>
      </div>
      <ChevronRight size={20} className="text-gray-400" strokeWidth={3} />
      <div className="flex items-center gap-2">
        <div
          aria-selected={false}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-sm font-bold leading-none text-gray-200 aria-selected:bg-purple-mid aria-selected:text-white"
        >
          2
        </div>
        <span
          aria-selected={false}
          className="text-base font-bold leading-normal text-gray-200 aria-selected:text-gray-400"
        >
          Contato
        </span>
      </div>
      <ChevronRight size={20} className="text-gray-400" strokeWidth={3} />
      <div className="flex items-center gap-2">
        <div
          aria-selected={false}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-sm font-bold leading-none text-gray-200 aria-selected:bg-purple-mid aria-selected:text-white"
        >
          3
        </div>
        <span
          aria-selected={false}
          className="text-base font-bold leading-normal text-gray-200 aria-selected:text-gray-400"
        >
          Contato
        </span>
      </div>
    </header>
  )
}
